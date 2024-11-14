//@ts-nocheck
import { CoreStoreSpecifics, CoreStoreConfig } from '@shell/core/types';

import SteveSchema from '@shell/models/steve-schema';
import { SteveFactory, steveStoreInit } from '@shell/plugins/steve/index';
import { PRODUCT_NAME } from '../../config/harvester';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const harvesterFactory = (): CoreStoreSpecifics => {
  SteveSchema.reset(config.namespace);

  const steveFactory = SteveFactory(null, null);

  steveFactory.getters = {
    ...steveFactory.getters,
    ...getters,
  };

  steveFactory.mutations = {
    ...steveFactory.mutations,
    ...mutations,
  };

  steveFactory.actions = {
    ...steveFactory.actions,
    ...actions,
  };

  return steveFactory;
};
const config: CoreStoreConfig = {
  namespace:      PRODUCT_NAME,
  isClusterStore: true
};

export default {
  specifics: harvesterFactory(config),
  config,
  init:      steveStoreInit
};
