import Parse from 'url-parse';
import { HCI } from '../types';
import { PRODUCT_NAME } from '../config/harvester';
import { featureEnabled, getVersion } from '../utils/feature-flags';

const state = function() {
  return {
    latestBundleId:      '',
    bundlePending:       false,
    showBundleModal:     false,
    bundlePercentage:    0,
    uploadingImages:     [],
    uploadingImageError: {},
  };
};

const mutations = {
  setLatestBundleId(state, bundleId) {
    state.latestBundleId = bundleId;
  },

  setBundlePending(state, value) {
    state.bundlePending = value;
  },

  toggleBundleModal(state, value) {
    state.showBundleModal = value;
  },

  setBundlePercentage(state, value) {
    state.bundlePercentage = value;
  },

  uploadStart(state, value) {
    state.uploadingImages.push(value);
  },

  uploadError(state, { name, message }) {
    state.uploadingImageError[name] = message;
  },

  uploadEnd(state, value) {
    const filtered = state.uploadingImages.filter((l) => l !== value);

    state['uploadingImages'] = filtered;
  }
};

const getters = {
  getBundleId(state) {
    return state.latestBundleId;
  },

  isBundlePending(state) {
    return state.bundlePending;
  },

  isShowBundleModal(state) {
    return state.showBundleModal;
  },

  getBundlePercentage(state) {
    return state.bundlePercentage;
  },

  uploadingImages(state) {
    return state.uploadingImages;
  },

  uploadingImageError(state) {
    return (name) => state.uploadingImageError[name];
  },

  getServerVersion: (_state, _getters, _rootState, rootGetters) => () => {
    const serverVersion = rootGetters['harvester/byId'](HCI.SETTING, 'server-version')?.value;

    return getVersion(serverVersion);
  },

  getFeatureEnabled: (_state, _getters, _rootState, rootGetters) => (feature, version) => {
    const serverVersion = version || rootGetters['harvester/byId'](HCI.SETTING, 'server-version')?.value;

    return featureEnabled(feature, serverVersion);
  },

  getHarvesterClusterUrl: (state, getters, rootState, rootGetters) => (url) => {
    // returns in multiple clusters: /k8s/clusters/${ clusterId }/${url}
    // Directly return the passed url in a single cluster
    if (rootGetters['isMultiCluster']) {
      const clusterId = rootGetters['clusterId'];
      const multipleClusterUrl = `/k8s/clusters/${ clusterId }/${ url }`;

      return `${ multipleClusterUrl }`;
    } else {
      return url;
    }
  }
};

const actions = {
  async bundleProgress({
    state, dispatch, commit, rootGetters
  }) {
    const parse = Parse(window.history.href);

    const id = state.latestBundleId;
    let bundleCrd = await dispatch(
      'harvester/find',
      { type: HCI.SUPPORT_BUNDLE, id },
      { root: true }
    );
    const t = rootGetters['i18n/t'];

    let count = 0;

    await commit('setBundlePending', true);
    const timer = setInterval(async() => {
      count = count + 1;
      if (count % 3 === 0) {
        // ws mayby disconnect
        bundleCrd = await dispatch(
          'harvester/find',
          {
            type: HCI.SUPPORT_BUNDLE,
            id,
            opt:  { force: true }
          },
          { root: true }
        );
      }

      if (bundleCrd.bundleState !== 'ready') {
        bundleCrd = rootGetters['harvester/byId'](HCI.SUPPORT_BUNDLE, id);
        const percentage = bundleCrd.precent;

        commit('setBundlePercentage', percentage);

        if (bundleCrd?.bundleMessage) {
          const err = bundleCrd?.bundleMessage;

          dispatch(
            'growl/fromError',
            { title: t('generic.notification.title.error'), err },
            { root: true }
          );
          clearInterval(timer);
          commit('setBundlePending', false);
          commit('toggleBundleModal', false);
        }
      } else {
        const name = id.split('/')[1];

        commit('setBundlePercentage', 1);

        setTimeout(() => {
          commit('toggleBundleModal', false);
          commit('setBundlePending', false);
          commit('setBundlePercentage', 0);
        }, 600);

        if (rootGetters['isMultiCluster']) {
          const clusterId = rootGetters['clusterId'];
          const prefix = `/k8s/clusters/${ clusterId }`;

          window.location.href = `${ parse.origin }${ prefix }/v1/harvester/supportbundles/${ name }/download`;
        } else {
          window.location.href = `${ parse.origin }/v1/harvester/supportbundles/${ name }/download`;
        }

        clearInterval(timer);
      }
    }, 1000);
  }
};

const harvesterFactory = () => {
  return {
    state,

    getters: { ...getters },

    mutations: { ...mutations },

    actions: { ...actions }
  };
};
const config = {
  namespace:      `${ PRODUCT_NAME }-common`,
  isClusterStore: false
};

export default {
  specifics: harvesterFactory(),
  config
};
