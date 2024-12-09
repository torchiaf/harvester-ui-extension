// Auto-generated type definitions for shell
// Do not modify this file as changes will get overwritten
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// This is required to keep typescript from complaining. It is required for
// our i18n plugin. For more info see:
// https://v2.vuejs.org/v2/guide/typescript.html?redirect=true#Augmenting-Types-for-Use-with-Plugins
declare module 'vue/types/vue' {
  // eslint-disable-next-line no-unused-vars
  interface Vue {
      /**
       * Lookup a given string with the given arguments
       * @param raw if set, do not do HTML escaping.
       */
      t: (key: string, args?: Record<string, any>, raw?: boolean) => string,
  }
}

declare module 'js-yaml';

// @shell/config/labels-annotations

declare module '@shell/config/labels-annotations' {
export const NORMAN_NAME: "field.cattle.io/name";
export const DESCRIPTION: "field.cattle.io/description";
export const HOSTNAME: "kubernetes.io/hostname";
export const TIMESTAMP: "cattle.io/timestamp";
export const SYSTEM_NAMESPACE: "management.cattle.io/system-namespace";
export const PROJECT: "field.cattle.io/projectId";
export const DEFAULT_PROJECT: "authz.management.cattle.io/default-project";
export const SYSTEM_PROJECT: "authz.management.cattle.io/system-project";
export const CONTAINER_DEFAULT_RESOURCE_LIMIT: "field.cattle.io/containerDefaultResourceLimit";
export const CATTLE_PUBLIC_ENDPOINTS: "field.cattle.io/publicEndpoints";
export const TARGET_WORKLOADS: "field.cattle.io/targetWorkloadIds";
export const UI_MANAGED: "management.cattle.io/ui-managed";
export const CREATOR_ID: "field.cattle.io/creatorId";
export const CREATOR_PRINCIPAL_ID: "field.cattle.io/creator-principal-name";
export const RESOURCE_QUOTA: "field.cattle.io/resourceQuota";
export const AZURE_MIGRATED: "auth.cattle.io/azuread-endpoint-migrated";
export const WORKSPACE_ANNOTATION: "objectset.rio.cattle.io/id";
export const NODE_ARCHITECTURE: "kubernetes.io/arch";
export namespace KUBERNETES {
    const SERVICE_ACCOUNT_UID: string;
    const SERVICE_ACCOUNT_NAME: string;
    const MANAGED_BY: string;
    const MANAGED_NAME: string;
    const INSTANCE: string;
}
export namespace CERTMANAGER {
    const ISSUER: string;
}
export namespace STORAGE {
    const DEFAULT_STORAGE_CLASS: string;
    const BETA_DEFAULT_STORAGE_CLASS: string;
}
export namespace MANAGEMENT_NODE {
    const NODE_NAME: string;
}
export namespace NODE_ROLES {
    const CONTROL_PLANE_OLD: string;
    const CONTROL_PLANE: string;
    const WORKER: string;
    const ETCD: string;
}
export namespace MACHINE_ROLES {
    const CONTROL_PLANE_1: string;
    export { CONTROL_PLANE_1 as CONTROL_PLANE };
    const WORKER_1: string;
    export { WORKER_1 as WORKER };
    const ETCD_1: string;
    export { ETCD_1 as ETCD };
}
export namespace CAPI {
    const DEPLOYMENT_NAME: string;
    const CREDENTIAL_DRIVER: string;
    const CLUSTER_NAMESPACE: string;
    const FORCE_MACHINE_REMOVE: string;
    const MACHINE_NAME: string;
    const DELETE_MACHINE: string;
    const PROVIDER: string;
    const SECRET_AUTH: string;
    const SECRET_WILL_DELETE: string;
    const UI_CUSTOM_PROVIDER: string;
}
export namespace CATALOG {
    const CERTIFIED: string;
    const _RANCHER: string;
    const _PARTNER: string;
    const _OTHER: string;
    const EXPERIMENTAL: string;
    const NAMESPACE: string;
    const RELEASE_NAME: string;
    const FEATURED: string;
    const REQUIRES_GVK: string;
    const PROVIDES: string;
    const AUTO_INSTALL_GVK: string;
    const AUTO_INSTALL: string;
    const HIDDEN: string;
    const REQUESTS_CPU: string;
    const REQUESTS_MEMORY: string;
    const SCOPE: string;
    const _MANAGEMENT: string;
    const _DOWNSTREAM: string;
    const TYPE: string;
    const _APP: string;
    const _CLUSTER_TPL: string;
    const _CLUSTER_TOOL: string;
    const COMPONENT: string;
    const SOURCE_REPO_TYPE: string;
    const SOURCE_REPO_NAME: string;
    const COLOR: string;
    const DISPLAY_NAME: string;
    const CLUSTER_REPO_NAME: string;
    const SUPPORTED_OS: string;
    const PERMITTED_OS: string;
    const DEPLOYED_OS: string;
    const MIGRATED: string;
    const MANAGED: string;
    const HIDDEN_REPO: string;
}
export namespace FLEET {
    export const CLUSTER_DISPLAY_NAME: string;
    export const CLUSTER_NAME: string;
    export const BUNDLE_ID: string;
    const MANAGED_1: string;
    export { MANAGED_1 as MANAGED };
    const CLUSTER_NAMESPACE_1: string;
    export { CLUSTER_NAMESPACE_1 as CLUSTER_NAMESPACE };
    export const CLUSTER: string;
}
export namespace RBAC {
    const PRODUCT: string;
}
export namespace RKE {
    const EXTERNAL_IP: string;
}
export namespace SNAPSHOT {
    const CLUSTER_NAME_1: string;
    export { CLUSTER_NAME_1 as CLUSTER_NAME };
}
export namespace ISTIO {
    const AUTO_INJECTION: string;
}
export const LABELS_TO_IGNORE_REGEX: RegExp[];
export const ANNOTATIONS_TO_IGNORE_REGEX: RegExp[];
export const ANNOTATIONS_TO_FOLD: RegExp[];
export namespace HCI {
    const CLOUD_INIT: string;
    const CLOUD_PROVIDER_IPAM: string;
    const NETWORK_ROUTE: string;
    const IMAGE_NAME: string;
    const NETWORK_TYPE: string;
    const CLUSTER_NETWORK: string;
    const PRIMARY_SERVICE: string;
}
export namespace CLUSTER_BADGE {
    export const TEXT: string;
    const COLOR_1: string;
    export { COLOR_1 as COLOR };
    export const ICON_TEXT: string;
}
export const SYSTEM_LABELS: string[];
export namespace CLOUD_CREDENTIALS {
    const EXPIRATION: string;
}
}

// @shell/config/query-params

declare module '@shell/config/query-params' {
export const SPA: "spa";
export const LOCAL: "local";
export const SETUP: "setup";
export const STEP: "step";
export const LOGGED_OUT: "logged-out";
export const IS_SSO: "is-sso";
export const IS_SLO: "is-slo";
export const UPGRADED: "upgraded";
export const TIMED_OUT: "timed-out";
export const AUTH_TEST: "test";
export const BACK_TO: "back-to";
export const GITHUB_CODE: "code";
export const GITHUB_NONCE: "state";
export const GITHUB_SCOPE: "scope";
export const GITHUB_REDIRECT: "redirect_uri";
export const _FLAGGED: any;
export const _UNFLAG: any;
export const SEARCH_QUERY: "q";
export const SORT_BY: "sort";
export const DESCENDING: "desc";
export const PAGE: "page";
export const MODE: "mode";
export const _CREATE: "create";
export const _VIEW: "view";
export const _EDIT: "edit";
export const _LIST: "list";
export const _CLONE: "clone";
export const _STAGE: "stage";
export const _IMPORT: "import";
export const AS: "as";
export const _DETAIL: "detail";
export const _CONFIG: "config";
export const _YAML: "yaml";
export const _GRAPH: "graph";
export const FOCUS: "focus";
export const PREVIEW: "preview";
export const DIFF: "diff";
export const _UNIFIED: "unified";
export const _SPLIT: "split";
export const SUB_TYPE: "type";
export const RKE_TYPE: "rkeType";
export const REPO_TYPE: "repo-type";
export const REPO: "repo";
export const CHART: "chart";
export const VERSION: "version";
export const NAME: "name";
export const NAMESPACE: "namespace";
export const DESCRIPTION: "description";
export const CATEGORY: "category";
export const OPERATING_SYSTEM: "os";
export const DEPRECATED: "deprecated";
export const HIDDEN: "hidden";
export const FROM_TOOLS: "tools";
export const FROM_CLUSTER: "cluster";
export const HIDE_SIDE_NAV: "hide-side-nav";
export const PROVIDER: "provider";
export const CLOUD_CREDENTIAL: "cloud";
export const PROJECT_ID: "projectId";
export const FLAT_VIEW: "flatView";
}

// @shell/config/table-headers

declare module '@shell/config/table-headers' {
export namespace STATE {
    export const name: string;
    export const labelKey: string;
    export const sort: string[];
    export const value: string;
    export function getValue(row: any): any;
    export const width: number;
    const _default: string;
    export { _default as default };
    export const formatter: string;
}
export namespace USER_STATE {
    const name_1: string;
    export { name_1 as name };
    const labelKey_1: string;
    export { labelKey_1 as labelKey };
    const sort_1: string[];
    export { sort_1 as sort };
    const value_1: string;
    export { value_1 as value };
    export function getValue_1(row: any): any;
    export { getValue_1 as getValue };
    const width_1: number;
    export { width_1 as width };
    const _default_1: string;
    export { _default_1 as default };
    const formatter_1: string;
    export { formatter_1 as formatter };
}
export namespace DOWNLOAD {
    const name_2: string;
    export { name_2 as name };
    const labelKey_2: string;
    export { labelKey_2 as labelKey };
    const value_2: string;
    export { value_2 as value };
    export const canBeVariable: boolean;
    export const align: string;
}
export namespace INTERNAL_EXTERNAL_IP {
    const name_3: string;
    export { name_3 as name };
    const labelKey_3: string;
    export { labelKey_3 as labelKey };
    export const search: string[];
    const sort_2: string[];
    export { sort_2 as sort };
    const formatter_2: string;
    export { formatter_2 as formatter };
}
export namespace NAME {
    const name_4: string;
    export { name_4 as name };
    const labelKey_4: string;
    export { labelKey_4 as labelKey };
    const value_3: string;
    export { value_3 as value };
    export function getValue_2(row: any): any;
    export { getValue_2 as getValue };
    const sort_3: string[];
    export { sort_3 as sort };
    const formatter_3: string;
    export { formatter_3 as formatter };
    const canBeVariable_1: boolean;
    export { canBeVariable_1 as canBeVariable };
}
export namespace LOGGING_OUTPUT_PROVIDERS {
    const name_5: string;
    export { name_5 as name };
    const labelKey_5: string;
    export { labelKey_5 as labelKey };
    const value_4: string;
    export { value_4 as value };
    const sort_4: string[];
    export { sort_4 as sort };
    const formatter_4: string;
    export { formatter_4 as formatter };
}
export namespace SIMPLE_NAME {
    const name_6: string;
    export { name_6 as name };
    const labelKey_6: string;
    export { labelKey_6 as labelKey };
    const value_5: string;
    export { value_5 as value };
    const sort_5: string[];
    export { sort_5 as sort };
    const width_2: number;
    export { width_2 as width };
    const canBeVariable_2: boolean;
    export { canBeVariable_2 as canBeVariable };
}
export namespace EFFECT {
    const name_7: string;
    export { name_7 as name };
    const labelKey_7: string;
    export { labelKey_7 as labelKey };
    const value_6: string;
    export { value_6 as value };
    const sort_6: string[];
    export { sort_6 as sort };
}
export namespace STORAGE_CLASS_PROVISIONER {
    const name_8: string;
    export { name_8 as name };
    const labelKey_8: string;
    export { labelKey_8 as labelKey };
    const value_7: string;
    export { value_7 as value };
    const sort_7: string[];
    export { sort_7 as sort };
}
export namespace STORAGE_CLASS_DEFAULT {
    const name_9: string;
    export { name_9 as name };
    const labelKey_9: string;
    export { labelKey_9 as labelKey };
    const value_8: string;
    export { value_8 as value };
    const sort_8: string[];
    export { sort_8 as sort };
    const formatter_5: string;
    export { formatter_5 as formatter };
}
export namespace PERSISTENT_VOLUME_SOURCE {
    const name_10: string;
    export { name_10 as name };
    const labelKey_10: string;
    export { labelKey_10 as labelKey };
    const value_9: string;
    export { value_9 as value };
    const sort_9: string[];
    export { sort_9 as sort };
}
export namespace PERSISTENT_VOLUME_CLAIM {
    const name_11: string;
    export { name_11 as name };
    const labelKey_11: string;
    export { labelKey_11 as labelKey };
    const sort_10: string[];
    export { sort_10 as sort };
    const value_10: string;
    export { value_10 as value };
    const formatter_6: string;
    export { formatter_6 as formatter };
    export namespace formatterOpts {
        const reference: string;
    }
}
export namespace OUTPUT {
    const name_12: string;
    export { name_12 as name };
    const labelKey_12: string;
    export { labelKey_12 as labelKey };
    const value_11: string;
    export { value_11 as value };
    const sort_11: string[];
    export { sort_11 as sort };
    const formatter_7: string;
    export { formatter_7 as formatter };
    export namespace formatterOpts_1 {
        namespace options {
            const internal: boolean;
        }
    }
    export { formatterOpts_1 as formatterOpts };
}
export namespace CONFIGURED_PROVIDERS {
    const name_13: string;
    export { name_13 as name };
    const labelKey_13: string;
    export { labelKey_13 as labelKey };
    const value_12: string;
    export { value_12 as value };
    const sort_12: string;
    export { sort_12 as sort };
    const formatter_8: string;
    export { formatter_8 as formatter };
}
export namespace CLUSTER_OUTPUT {
    const name_14: string;
    export { name_14 as name };
    const value_13: string;
    export { value_13 as value };
    const sort_13: string[];
    export { sort_13 as sort };
    const labelKey_14: string;
    export { labelKey_14 as labelKey };
}
export namespace ID_UNLINKED {
    const name_15: string;
    export { name_15 as name };
    const labelKey_15: string;
    export { labelKey_15 as labelKey };
    const value_14: string;
    export { value_14 as value };
    const sort_14: string[];
    export { sort_14 as sort };
    const canBeVariable_3: boolean;
    export { canBeVariable_3 as canBeVariable };
}
export namespace NAME_UNLINKED {
    const name_16: string;
    export { name_16 as name };
    const labelKey_16: string;
    export { labelKey_16 as labelKey };
    const value_15: string;
    export { value_15 as value };
    const sort_15: string[];
    export { sort_15 as sort };
    const canBeVariable_4: boolean;
    export { canBeVariable_4 as canBeVariable };
}
export namespace NAMESPACE {
    const name_17: string;
    export { name_17 as name };
    const labelKey_17: string;
    export { labelKey_17 as labelKey };
    const value_16: string;
    export { value_16 as value };
    export function getValue_3(row: any): any;
    export { getValue_3 as getValue };
    const sort_16: string;
    export { sort_16 as sort };
    export const dashIfEmpty: boolean;
}
export namespace NODE {
    const name_18: string;
    export { name_18 as name };
    const labelKey_18: string;
    export { labelKey_18 as labelKey };
    const value_17: string;
    export { value_17 as value };
    export function getValue_4(row: any): any;
    export { getValue_4 as getValue };
    const sort_17: string;
    export { sort_17 as sort };
    const formatter_9: string;
    export { formatter_9 as formatter };
    export namespace formatterOpts_2 {
        export { NODE_TYPE as type };
    }
    export { formatterOpts_2 as formatterOpts };
}
export namespace NODE_NAME {
    const name_19: string;
    export { name_19 as name };
    const labelKey_19: string;
    export { labelKey_19 as labelKey };
    const sort_18: string;
    export { sort_18 as sort };
    const value_18: string;
    export { value_18 as value };
    export function getValue_5(row: any): any;
    export { getValue_5 as getValue };
    const formatter_10: string;
    export { formatter_10 as formatter };
}
export namespace ROLES {
    const name_20: string;
    export { name_20 as name };
    const labelKey_20: string;
    export { labelKey_20 as labelKey };
    const sort_19: string;
    export { sort_19 as sort };
    const value_19: string;
    export { value_19 as value };
}
export namespace VERSION {
    const name_21: string;
    export { name_21 as name };
    const labelKey_21: string;
    export { labelKey_21 as labelKey };
    const sort_20: string;
    export { sort_20 as sort };
    const value_20: string;
    export { value_20 as value };
    export function getValue_6(row: any): any;
    export { getValue_6 as getValue };
}
export namespace CPU {
    const name_22: string;
    export { name_22 as name };
    const labelKey_22: string;
    export { labelKey_22 as labelKey };
    const sort_21: string;
    export { sort_21 as sort };
    const search_1: boolean;
    export { search_1 as search };
    const value_21: string;
    export { value_21 as value };
    const formatter_11: string;
    export { formatter_11 as formatter };
    const width_3: number;
    export { width_3 as width };
}
export namespace RAM {
    const name_23: string;
    export { name_23 as name };
    const labelKey_23: string;
    export { labelKey_23 as labelKey };
    const sort_22: string;
    export { sort_22 as sort };
    const search_2: boolean;
    export { search_2 as search };
    const value_22: string;
    export { value_22 as value };
    const formatter_12: string;
    export { formatter_12 as formatter };
    const width_4: number;
    export { width_4 as width };
}
export namespace PRINCIPAL {
    const name_24: string;
    export { name_24 as name };
    const labelKey_24: string;
    export { labelKey_24 as labelKey };
    const sort_23: string;
    export { sort_23 as sort };
    const value_23: string;
    export { value_23 as value };
    const formatter_13: string;
    export { formatter_13 as formatter };
}
export namespace PODS {
    const name_25: string;
    export { name_25 as name };
    const labelKey_25: string;
    export { labelKey_25 as labelKey };
    const sort_24: string;
    export { sort_24 as sort };
    const search_3: boolean;
    export { search_3 as search };
    export function value_24(row: any): any;
    export { value_24 as value };
    const formatter_14: string;
    export { formatter_14 as formatter };
    const width_5: number;
    export { width_5 as width };
}
export namespace AGE {
    const name_26: string;
    export { name_26 as name };
    const labelKey_26: string;
    export { labelKey_26 as labelKey };
    const value_25: string;
    export { value_25 as value };
    export function getValue_7(row: any): any;
    export { getValue_7 as getValue };
    const sort_25: string;
    export { sort_25 as sort };
    const search_4: boolean;
    export { search_4 as search };
    const formatter_15: string;
    export { formatter_15 as formatter };
    const width_6: number;
    export { width_6 as width };
    const align_1: string;
    export { align_1 as align };
}
export namespace AGE_NORMAN {
    export function getValue_8(row: any): any;
    export { getValue_8 as getValue };
    const value_26: string;
    export { value_26 as value };
    const sort_26: string;
    export { sort_26 as sort };
}
export namespace CREATION_DATE {
    const name_27: string;
    export { name_27 as name };
    const labelKey_27: string;
    export { labelKey_27 as labelKey };
    const value_27: string;
    export { value_27 as value };
    const sort_27: string[];
    export { sort_27 as sort };
    const formatter_16: string;
    export { formatter_16 as formatter };
}
export namespace DESCRIPTION {
    const name_28: string;
    export { name_28 as name };
    const labelKey_28: string;
    export { labelKey_28 as labelKey };
    const align_2: string;
    export { align_2 as align };
    const sort_28: string[];
    export { sort_28 as sort };
    const width_7: number;
    export { width_7 as width };
}
export namespace NS_SNAPSHOT_QUOTA {
    const name_29: string;
    export { name_29 as name };
    const labelKey_29: string;
    export { labelKey_29 as labelKey };
    const value_28: string;
    export { value_28 as value };
    const sort_29: string;
    export { sort_29 as sort };
    const align_3: string;
    export { align_3 as align };
    const formatter_17: string;
    export { formatter_17 as formatter };
    export namespace formatterOpts_3 {
        namespace opts {
            const increment: number;
            const addSuffix: boolean;
            const suffix: string;
        }
        const needParseSi: boolean;
    }
    export { formatterOpts_3 as formatterOpts };
}
export namespace DURATION {
    const name_30: string;
    export { name_30 as name };
    const labelKey_30: string;
    export { labelKey_30 as labelKey };
    const value_29: string;
    export { value_29 as value };
    const sort_30: string;
    export { sort_30 as sort };
    const formatter_18: string;
    export { formatter_18 as formatter };
}
export namespace IMAGE_NAME {
    const name_31: string;
    export { name_31 as name };
    const labelKey_31: string;
    export { labelKey_31 as labelKey };
    const value_30: string;
    export { value_30 as value };
    const sort_31: string[];
    export { sort_31 as sort };
    const formatter_19: string;
    export { formatter_19 as formatter };
}
export namespace POD_IMAGES {
    const name_32: string;
    export { name_32 as name };
    const labelKey_32: string;
    export { labelKey_32 as labelKey };
    const value_31: string;
    export { value_31 as value };
    export function getValue_9(row: any): any;
    export { getValue_9 as getValue };
    const sort_32: string;
    export { sort_32 as sort };
    const formatter_20: string;
    export { formatter_20 as formatter };
}
export namespace POD_RESTARTS {
    const name_33: string;
    export { name_33 as name };
    const labelKey_33: string;
    export { labelKey_33 as labelKey };
    const formatter_21: string;
    export { formatter_21 as formatter };
    export const delayLoading: boolean;
    const value_32: string;
    export { value_32 as value };
    export function getValue_10(row: any): any;
    export { getValue_10 as getValue };
    const search_5: boolean;
    export { search_5 as search };
    export const liveUpdates: boolean;
}
export namespace ENDPOINTS {
    const name_34: string;
    export { name_34 as name };
    const labelKey_34: string;
    export { labelKey_34 as labelKey };
    const value_33: string;
    export { value_33 as value };
    const formatter_22: string;
    export { formatter_22 as formatter };
    const width_8: number;
    export { width_8 as width };
    const align_4: string;
    export { align_4 as align };
}
export namespace SCALE {
    const name_35: string;
    export { name_35 as name };
    const labelKey_35: string;
    export { labelKey_35 as labelKey };
    const value_34: string;
    export { value_34 as value };
    const sort_33: string[];
    export { sort_33 as sort };
    const formatter_23: string;
    export { formatter_23 as formatter };
    const width_9: number;
    export { width_9 as width };
    const align_5: string;
    export { align_5 as align };
}
export namespace SIMPLE_SCALE {
    const name_36: string;
    export { name_36 as name };
    const labelKey_36: string;
    export { labelKey_36 as labelKey };
    const value_35: string;
    export { value_35 as value };
    const sort_34: string[];
    export { sort_34 as sort };
}
export namespace SUCCESS {
    const name_37: string;
    export { name_37 as name };
    const labelKey_37: string;
    export { labelKey_37 as labelKey };
    const value_36: string;
    export { value_36 as value };
    const width_10: number;
    export { width_10 as width };
    const align_6: string;
    export { align_6 as align };
}
export namespace REQ_RATE {
    const name_38: string;
    export { name_38 as name };
    const labelKey_38: string;
    export { labelKey_38 as labelKey };
    const value_37: string;
    export { value_37 as value };
    const width_11: number;
    export { width_11 as width };
    const align_7: string;
    export { align_7 as align };
}
export namespace P95 {
    const name_39: string;
    export { name_39 as name };
    const labelKey_39: string;
    export { labelKey_39 as labelKey };
    const value_38: string;
    export { value_38 as value };
    const width_12: number;
    export { width_12 as width };
    const align_8: string;
    export { align_8 as align };
}
export namespace KEYS {
    const name_40: string;
    export { name_40 as name };
    const labelKey_40: string;
    export { labelKey_40 as labelKey };
    const sort_35: boolean;
    export { sort_35 as sort };
    const value_39: string;
    export { value_39 as value };
}
export namespace SECRET_DATA {
    const name_41: string;
    export { name_41 as name };
    const labelKey_41: string;
    export { labelKey_41 as labelKey };
    const value_40: string;
    export { value_40 as value };
    const formatter_24: string;
    export { formatter_24 as formatter };
}
export namespace TARGET_KIND {
    const name_42: string;
    export { name_42 as name };
    const labelKey_42: string;
    export { labelKey_42 as labelKey };
    const value_41: string;
    export { value_41 as value };
    const width_13: number;
    export { width_13 as width };
}
export namespace TARGET {
    const name_43: string;
    export { name_43 as name };
    const labelKey_43: string;
    export { labelKey_43 as labelKey };
    const value_42: string;
    export { value_42 as value };
}
export namespace USERNAME {
    const name_44: string;
    export { name_44 as name };
    const labelKey_44: string;
    export { labelKey_44 as labelKey };
    const value_43: string;
    export { value_43 as value };
    const dashIfEmpty_1: boolean;
    export { dashIfEmpty_1 as dashIfEmpty };
    const sort_36: string;
    export { sort_36 as sort };
}
export namespace USER_DISPLAY_NAME {
    const name_45: string;
    export { name_45 as name };
    const labelKey_45: string;
    export { labelKey_45 as labelKey };
    const value_44: string;
    export { value_44 as value };
    const sort_37: string[];
    export { sort_37 as sort };
    const dashIfEmpty_2: boolean;
    export { dashIfEmpty_2 as dashIfEmpty };
}
export namespace USER_PROVIDER {
    const name_46: string;
    export { name_46 as name };
    const labelKey_46: string;
    export { labelKey_46 as labelKey };
    const value_45: string;
    export { value_45 as value };
    const dashIfEmpty_3: boolean;
    export { dashIfEmpty_3 as dashIfEmpty };
    const sort_38: string;
    export { sort_38 as sort };
}
export namespace USER_LAST_LOGIN {
    const name_47: string;
    export { name_47 as name };
    const labelKey_47: string;
    export { labelKey_47 as labelKey };
    const value_46: string;
    export { value_46 as value };
    const formatter_25: string;
    export { formatter_25 as formatter };
    export namespace formatterOpts_4 {
        const addSuffix_1: boolean;
        export { addSuffix_1 as addSuffix };
    }
    export { formatterOpts_4 as formatterOpts };
    const sort_39: string;
    export { sort_39 as sort };
}
export namespace USER_DISABLED_IN {
    const name_48: string;
    export { name_48 as name };
    const labelKey_48: string;
    export { labelKey_48 as labelKey };
    const value_47: string;
    export { value_47 as value };
    const formatter_26: string;
    export { formatter_26 as formatter };
    export namespace formatterOpts_5 {
        const isCountdown: boolean;
    }
    export { formatterOpts_5 as formatterOpts };
    const sort_40: string;
    export { sort_40 as sort };
}
export namespace USER_DELETED_IN {
    const name_49: string;
    export { name_49 as name };
    const labelKey_49: string;
    export { labelKey_49 as labelKey };
    const value_48: string;
    export { value_48 as value };
    const formatter_27: string;
    export { formatter_27 as formatter };
    export namespace formatterOpts_6 {
        const isCountdown_1: boolean;
        export { isCountdown_1 as isCountdown };
    }
    export { formatterOpts_6 as formatterOpts };
    const sort_41: string;
    export { sort_41 as sort };
}
export namespace USER_ID {
    const name_50: string;
    export { name_50 as name };
    const labelKey_50: string;
    export { labelKey_50 as labelKey };
    const value_49: string;
    export { value_49 as value };
    const formatter_28: string;
    export { formatter_28 as formatter };
    const canBeVariable_5: boolean;
    export { canBeVariable_5 as canBeVariable };
    const sort_42: string;
    export { sort_42 as sort };
}
export namespace ADDRESS {
    const name_51: string;
    export { name_51 as name };
    const labelKey_51: string;
    export { labelKey_51 as labelKey };
    const value_50: string;
    export { value_50 as value };
    const sort_43: string[];
    export { sort_43 as sort };
}
export namespace SIMPLE_TYPE {
    const name_52: string;
    export { name_52 as name };
    const labelKey_52: string;
    export { labelKey_52 as labelKey };
    const value_51: string;
    export { value_51 as value };
    const sort_44: string[];
    export { sort_44 as sort };
    const width_14: number;
    export { width_14 as width };
}
export namespace IMAGE_SIZE {
    const name_53: string;
    export { name_53 as name };
    const labelKey_53: string;
    export { labelKey_53 as labelKey };
    const value_52: string;
    export { value_52 as value };
    const sort_45: string[];
    export { sort_45 as sort };
    const formatter_29: string;
    export { formatter_29 as formatter };
}
export namespace TYPE {
    const name_54: string;
    export { name_54 as name };
    const labelKey_54: string;
    export { labelKey_54 as labelKey };
    const value_53: string;
    export { value_53 as value };
    export function getValue_11(row: any): any;
    export { getValue_11 as getValue };
    const sort_46: string[];
    export { sort_46 as sort };
    const width_15: number;
    export { width_15 as width };
}
export namespace SUB_TYPE {
    const name_55: string;
    export { name_55 as name };
    const labelKey_55: string;
    export { labelKey_55 as labelKey };
    const value_54: string;
    export { value_54 as value };
    const sort_47: string[];
    export { sort_47 as sort };
    const width_16: number;
    export { width_16 as width };
}
export namespace EVENT_TYPE {
    const name_56: string;
    export { name_56 as name };
    const labelKey_56: string;
    export { labelKey_56 as labelKey };
    const value_55: string;
    export { value_55 as value };
    const sort_48: string;
    export { sort_48 as sort };
}
export namespace STATUS {
    const name_57: string;
    export { name_57 as name };
    const labelKey_57: string;
    export { labelKey_57 as labelKey };
    const value_56: string;
    export { value_56 as value };
    const sort_49: string[];
    export { sort_49 as sort };
    const width_17: number;
    export { width_17 as width };
}
export namespace LAST_SEEN_TIME {
    const name_58: string;
    export { name_58 as name };
    const labelKey_58: string;
    export { labelKey_58 as labelKey };
    const value_57: string;
    export { value_57 as value };
    const sort_50: string;
    export { sort_50 as sort };
    export const tooltip: string;
}
export namespace LAST_HEARTBEAT_TIME {
    const name_59: string;
    export { name_59 as name };
    const labelKey_59: string;
    export { labelKey_59 as labelKey };
    const value_58: string;
    export { value_58 as value };
    const sort_51: string[];
    export { sort_51 as sort };
    const formatter_30: string;
    export { formatter_30 as formatter };
    const width_18: number;
    export { width_18 as width };
}
export namespace REASON {
    const name_60: string;
    export { name_60 as name };
    const labelKey_60: string;
    export { labelKey_60 as labelKey };
    const value_59: string;
    export { value_59 as value };
    const sort_52: string[];
    export { sort_52 as sort };
}
export namespace OBJECT {
    const name_61: string;
    export { name_61 as name };
    const labelKey_61: string;
    export { labelKey_61 as labelKey };
    const value_60: string;
    export { value_60 as value };
    const sort_53: string[];
    export { sort_53 as sort };
    const canBeVariable_6: boolean;
    export { canBeVariable_6 as canBeVariable };
    const formatter_31: string;
    export { formatter_31 as formatter };
}
export namespace RECLAIM_POLICY {
    const name_62: string;
    export { name_62 as name };
    const labelKey_62: string;
    export { labelKey_62 as labelKey };
    const value_61: string;
    export { value_61 as value };
    const sort_54: string[];
    export { sort_54 as sort };
}
export namespace PV_REASON {
    const name_63: string;
    export { name_63 as name };
    const labelKey_63: string;
    export { labelKey_63 as labelKey };
    const value_62: string;
    export { value_62 as value };
    const sort_55: string[];
    export { sort_55 as sort };
}
export namespace MESSAGE {
    const name_64: string;
    export { name_64 as name };
    const labelKey_64: string;
    export { labelKey_64 as labelKey };
    const value_63: string;
    export { value_63 as value };
    const sort_56: string[];
    export { sort_56 as sort };
}
export namespace KEY {
    const name_65: string;
    export { name_65 as name };
    const labelKey_65: string;
    export { labelKey_65 as labelKey };
    const value_64: string;
    export { value_64 as value };
    const sort_57: string[];
    export { sort_57 as sort };
}
export namespace VALUE {
    const name_66: string;
    export { name_66 as name };
    const labelKey_66: string;
    export { labelKey_66 as labelKey };
    const value_65: string;
    export { value_65 as value };
    const sort_58: string[];
    export { sort_58 as sort };
}
export namespace BUILT_IN {
    const name_67: string;
    export { name_67 as name };
    const labelKey_67: string;
    export { labelKey_67 as labelKey };
    const value_66: string;
    export { value_66 as value };
    const sort_59: string[];
    export { sort_59 as sort };
    const align_9: string;
    export { align_9 as align };
    const formatter_32: string;
    export { formatter_32 as formatter };
}
export namespace CLUSTER_CREATOR_DEFAULT {
    const name_68: string;
    export { name_68 as name };
    const labelKey_68: string;
    export { labelKey_68 as labelKey };
    const value_67: string;
    export { value_67 as value };
    const sort_60: string[];
    export { sort_60 as sort };
    const align_10: string;
    export { align_10 as align };
    const formatter_33: string;
    export { formatter_33 as formatter };
}
export namespace RBAC_DEFAULT {
    const name_69: string;
    export { name_69 as name };
    const labelKey_69: string;
    export { labelKey_69 as labelKey };
    const value_68: string;
    export { value_68 as value };
    const formatter_34: string;
    export { formatter_34 as formatter };
    const sort_61: string[];
    export { sort_61 as sort };
}
export namespace RBAC_BUILTIN {
    const name_70: string;
    export { name_70 as name };
    const labelKey_70: string;
    export { labelKey_70 as labelKey };
    const value_69: string;
    export { value_69 as value };
    const formatter_35: string;
    export { formatter_35 as formatter };
    const sort_62: string[];
    export { sort_62 as sort };
}
export namespace RESOURCE {
    const name_71: string;
    export { name_71 as name };
    const labelKey_71: string;
    export { labelKey_71 as labelKey };
    const value_70: string;
    export { value_70 as value };
    const sort_63: string[];
    export { sort_63 as sort };
}
export namespace API_GROUP {
    const name_72: string;
    export { name_72 as name };
    const labelKey_72: string;
    export { labelKey_72 as labelKey };
    const value_71: string;
    export { value_71 as value };
    const sort_64: string[];
    export { sort_64 as sort };
}
export namespace INGRESS_CLASS {
    const name_73: string;
    export { name_73 as name };
    const labelKey_73: string;
    export { labelKey_73 as labelKey };
    const value_72: string;
    export { value_72 as value };
    const sort_65: string;
    export { sort_65 as sort };
}
export namespace INGRESS_DEFAULT_BACKEND {
    const name_74: string;
    export { name_74 as name };
    const labelKey_74: string;
    export { labelKey_74 as labelKey };
    const value_73: string;
    export { value_73 as value };
    const sort_66: string[];
    export { sort_66 as sort };
    const formatter_36: string;
    export { formatter_36 as formatter };
    const width_19: number;
    export { width_19 as width };
    const align_11: string;
    export { align_11 as align };
}
export namespace INGRESS_TARGET {
    const name_75: string;
    export { name_75 as name };
    const labelKey_75: string;
    export { labelKey_75 as labelKey };
    const value_74: string;
    export { value_74 as value };
    const formatter_37: string;
    export { formatter_37 as formatter };
    const sort_67: string;
    export { sort_67 as sort };
}
export namespace SPEC_TYPE {
    const name_76: string;
    export { name_76 as name };
    const labelKey_76: string;
    export { labelKey_76 as labelKey };
    const value_75: string;
    export { value_75 as value };
    const sort_68: string;
    export { sort_68 as sort };
    const formatter_38: string;
    export { formatter_38 as formatter };
}
export namespace TARGET_PORT {
    const formatter_39: string;
    export { formatter_39 as formatter };
    const labelKey_77: string;
    export { labelKey_77 as labelKey };
    const name_77: string;
    export { name_77 as name };
    const sort_69: string;
    export { sort_69 as sort };
    const value_76: string;
    export { value_76 as value };
}
export namespace SELECTOR {
    const formatter_40: string;
    export { formatter_40 as formatter };
    const name_78: string;
    export { name_78 as name };
    const labelKey_78: string;
    export { labelKey_78 as labelKey };
    const value_77: string;
    export { value_77 as value };
    const sort_70: string;
    export { sort_70 as sort };
}
export namespace CHART {
    const name_79: string;
    export { name_79 as name };
    const labelKey_79: string;
    export { labelKey_79 as labelKey };
    const value_78: string;
    export { value_78 as value };
    const sort_71: string[];
    export { sort_71 as sort };
}
export namespace CHART_UPGRADE {
    const name_80: string;
    export { name_80 as name };
    const labelKey_80: string;
    export { labelKey_80 as labelKey };
    const value_79: string;
    export { value_79 as value };
    const sort_72: string;
    export { sort_72 as sort };
    const dashIfEmpty_4: boolean;
    export { dashIfEmpty_4 as dashIfEmpty };
}
export namespace RESOURCES {
    const name_81: string;
    export { name_81 as name };
    const labelKey_81: string;
    export { labelKey_81 as labelKey };
    const value_80: string;
    export { value_80 as value };
    const sort_73: string;
    export { sort_73 as sort };
    const width_20: number;
    export { width_20 as width };
}
export namespace URL {
    const name_82: string;
    export { name_82 as name };
    const labelKey_82: string;
    export { labelKey_82 as labelKey };
    const value_81: string;
    export { value_81 as value };
    const sort_74: string;
    export { sort_74 as sort };
}
export namespace LAST_UPDATED {
    const name_83: string;
    export { name_83 as name };
    const labelKey_83: string;
    export { labelKey_83 as labelKey };
    const value_82: string;
    export { value_82 as value };
    const formatter_41: string;
    export { formatter_41 as formatter };
    export namespace formatterOpts_7 {
        const addSuffix_2: boolean;
        export { addSuffix_2 as addSuffix };
    }
    export { formatterOpts_7 as formatterOpts };
    const sort_75: string[];
    export { sort_75 as sort };
}
export namespace WORKSPACE {
    const name_84: string;
    export { name_84 as name };
    export const label: string;
    const value_83: string;
    export { value_83 as value };
    const sort_76: string[];
    export { sort_76 as sort };
}
export namespace WORKLOAD_IMAGES {
    const value_84: string;
    export { value_84 as value };
    export const breakpoint: any;
}
export namespace WORKLOAD_ENDPOINTS {
    const name_85: string;
    export { name_85 as name };
    const labelKey_84: string;
    export { labelKey_84 as labelKey };
    const value_85: string;
    export { value_85 as value };
    export function getValue_12(row: any): any;
    export { getValue_12 as getValue };
    const formatter_42: string;
    export { formatter_42 as formatter };
    const dashIfEmpty_5: boolean;
    export { dashIfEmpty_5 as dashIfEmpty };
    const breakpoint_1: any;
    export { breakpoint_1 as breakpoint };
    export const maxPageSize: number;
}
export namespace WORKLOAD_HEALTH_SCALE {
    const name_86: string;
    export { name_86 as name };
    const labelKey_85: string;
    export { labelKey_85 as labelKey };
    const formatter_43: string;
    export { formatter_43 as formatter };
    export function getValue_13(): any;
    export { getValue_13 as getValue };
    const width_21: number;
    export { width_21 as width };
    export const skipSelect: boolean;
    const delayLoading_1: boolean;
    export { delayLoading_1 as delayLoading };
    const search_6: boolean;
    export { search_6 as search };
    const liveUpdates_1: boolean;
    export { liveUpdates_1 as liveUpdates };
}
export namespace FLEET_SUMMARY {
    const name_87: string;
    export { name_87 as name };
    const labelKey_86: string;
    export { labelKey_86 as labelKey };
    const value_86: string;
    export { value_86 as value };
    const sort_77: boolean;
    export { sort_77 as sort };
    const search_7: boolean;
    export { search_7 as search };
    const formatter_44: string;
    export { formatter_44 as formatter };
    const align_12: string;
    export { align_12 as align };
    const width_22: number;
    export { width_22 as width };
}
export namespace FLEET_REPO_CLUSTER_SUMMARY {
    const name_88: string;
    export { name_88 as name };
    const labelKey_87: string;
    export { labelKey_87 as labelKey };
    const value_87: string;
    export { value_87 as value };
    const sort_78: boolean;
    export { sort_78 as sort };
    const search_8: boolean;
    export { search_8 as search };
    const formatter_45: string;
    export { formatter_45 as formatter };
    const align_13: string;
    export { align_13 as align };
    const width_23: number;
    export { width_23 as width };
}
export namespace FLEET_REPO_PER_CLUSTER_STATE {
    const name_89: string;
    export { name_89 as name };
    const labelKey_88: string;
    export { labelKey_88 as labelKey };
    const tooltip_1: string;
    export { tooltip_1 as tooltip };
    const sort_79: string[];
    export { sort_79 as sort };
    const width_24: number;
    export { width_24 as width };
    const _default_2: string;
    export { _default_2 as default };
    const formatter_46: string;
    export { formatter_46 as formatter };
    export namespace formatterOpts_8 {
        const arbitrary: boolean;
    }
    export { formatterOpts_8 as formatterOpts };
}
export namespace APP_SUMMARY {
    const name_90: string;
    export { name_90 as name };
    const labelKey_89: string;
    export { labelKey_89 as labelKey };
    const value_88: string;
    export { value_88 as value };
    const sort_80: boolean;
    export { sort_80 as sort };
    const search_9: boolean;
    export { search_9 as search };
    const formatter_47: string;
    export { formatter_47 as formatter };
    const align_14: string;
    export { align_14 as align };
    const width_25: number;
    export { width_25 as width };
}
export namespace CONSTRAINT_VIOLATION_CONSTRAINT_LINK {
    const name_91: string;
    export { name_91 as name };
    const labelKey_90: string;
    export { labelKey_90 as labelKey };
    const value_89: string;
    export { value_89 as value };
    const sort_81: string;
    export { sort_81 as sort };
    const formatter_48: string;
    export { formatter_48 as formatter };
    export namespace formatterOpts_9 {
        export namespace options_1 {
            const internal_1: boolean;
            export { internal_1 as internal };
        }
        export { options_1 as options };
    }
    export { formatterOpts_9 as formatterOpts };
}
export namespace CONSTRAINT_VIOLATION_RESOURCE_LINK {
    const name_92: string;
    export { name_92 as name };
    const labelKey_91: string;
    export { labelKey_91 as labelKey };
    const value_90: string;
    export { value_90 as value };
    const sort_82: string;
    export { sort_82 as sort };
    const search_10: string;
    export { search_10 as search };
    const formatter_49: string;
    export { formatter_49 as formatter };
    export namespace formatterOpts_10 {
        export namespace options_2 {
            const internal_2: boolean;
            export { internal_2 as internal };
        }
        export { options_2 as options };
    }
    export { formatterOpts_10 as formatterOpts };
}
export namespace CONSTRAINT_VIOLATION_TYPE {
    const name_93: string;
    export { name_93 as name };
    const labelKey_92: string;
    export { labelKey_92 as labelKey };
    const value_91: string;
    export { value_91 as value };
    const sort_83: string;
    export { sort_83 as sort };
}
export namespace CONSTRAINT_VIOLATION_NAMESPACE {
    const name_94: string;
    export { name_94 as name };
    const labelKey_93: string;
    export { labelKey_93 as labelKey };
    const value_92: string;
    export { value_92 as value };
    const sort_84: string;
    export { sort_84 as sort };
    const search_11: string;
    export { search_11 as search };
}
export namespace CONSTRAINT_VIOLATION_MESSAGE {
    const name_95: string;
    export { name_95 as name };
    const labelKey_94: string;
    export { labelKey_94 as labelKey };
    const value_93: string;
    export { value_93 as value };
    const sort_85: string;
    export { sort_85 as sort };
}
export namespace CONSTRAINT_VIOLATION_TEMPLATE_LINK {
    const name_96: string;
    export { name_96 as name };
    const labelKey_95: string;
    export { labelKey_95 as labelKey };
    const value_94: string;
    export { value_94 as value };
    const sort_86: string;
    export { sort_86 as sort };
    const formatter_50: string;
    export { formatter_50 as formatter };
    export namespace formatterOpts_11 {
        export namespace options_3 {
            const internal_3: boolean;
            export { internal_3 as internal };
        }
        export { options_3 as options };
    }
    export { formatterOpts_11 as formatterOpts };
}
export namespace CONSTRAINT_VIOLATION_COUNT {
    const name_97: string;
    export { name_97 as name };
    const labelKey_96: string;
    export { labelKey_96 as labelKey };
    const value_95: string;
    export { value_95 as value };
    const sort_87: string;
    export { sort_87 as sort };
    const formatter_51: string;
    export { formatter_51 as formatter };
    export namespace formatterOpts_12 {
        function qualityFn(value: any): "error" | "success" | "warning";
        function qualityFn(value: any): "error" | "success" | "warning";
    }
    export { formatterOpts_12 as formatterOpts };
}
export namespace RECEIVER_PROVIDERS {
    const name_98: string;
    export { name_98 as name };
    const label_1: string;
    export { label_1 as label };
    const value_96: string;
    export { value_96 as value };
    const sort_88: string;
    export { sort_88 as sort };
    const formatter_52: string;
    export { formatter_52 as formatter };
}
export namespace CONFIGURED_RECEIVER {
    const name_99: string;
    export { name_99 as name };
    const label_2: string;
    export { label_2 as label };
    const value_97: string;
    export { value_97 as value };
    const sort_89: string;
    export { sort_89 as sort };
    const formatter_53: string;
    export { formatter_53 as formatter };
    export namespace formatterOpts_13 {
        export namespace options_4 {
            const internal_4: boolean;
            export { internal_4 as internal };
        }
        export { options_4 as options };
    }
    export { formatterOpts_13 as formatterOpts };
}
export namespace GROUP_NAME {
    const name_100: string;
    export { name_100 as name };
    const labelKey_97: string;
    export { labelKey_97 as labelKey };
    const value_98: string;
    export { value_98 as value };
    const sort_90: string[];
    export { sort_90 as sort };
    const search_12: string[];
    export { search_12 as search };
    const formatter_54: string;
    export { formatter_54 as formatter };
    const width_26: number;
    export { width_26 as width };
}
export namespace GROUP_ROLE_NAME {
    const name_101: string;
    export { name_101 as name };
    const labelKey_98: string;
    export { labelKey_98 as labelKey };
    const value_99: string;
    export { value_99 as value };
    const formatter_55: string;
    export { formatter_55 as formatter };
}
export namespace HPA_REFERENCE {
    const name_102: string;
    export { name_102 as name };
    const labelKey_99: string;
    export { labelKey_99 as labelKey };
    const value_100: string;
    export { value_100 as value };
    const sort_91: string;
    export { sort_91 as sort };
}
export namespace MIN_REPLICA {
    const name_103: string;
    export { name_103 as name };
    const labelKey_100: string;
    export { labelKey_100 as labelKey };
    const value_101: string;
    export { value_101 as value };
    const sort_92: string;
    export { sort_92 as sort };
}
export namespace MAX_REPLICA {
    const name_104: string;
    export { name_104 as name };
    const labelKey_101: string;
    export { labelKey_101 as labelKey };
    const value_102: string;
    export { value_102 as value };
    const sort_93: string;
    export { sort_93 as sort };
}
export namespace CURRENT_REPLICA {
    const name_105: string;
    export { name_105 as name };
    const labelKey_102: string;
    export { labelKey_102 as labelKey };
    const value_103: string;
    export { value_103 as value };
    const sort_94: string;
    export { sort_94 as sort };
}
export namespace EXPIRY_STATE {
    const value_104: string;
    export { value_104 as value };
    const formatter_56: string;
    export { formatter_56 as formatter };
}
export namespace ACCESS_KEY {
    const name_106: string;
    export { name_106 as name };
    const labelKey_103: string;
    export { labelKey_103 as labelKey };
    const align_15: string;
    export { align_15 as align };
    const sort_95: string[];
    export { sort_95 as sort };
    const width_27: number;
    export { width_27 as width };
}
export namespace SCOPE {
    const name_107: string;
    export { name_107 as name };
    const value_105: string;
    export { value_105 as value };
    const labelKey_104: string;
    export { labelKey_104 as labelKey };
    const dashIfEmpty_6: boolean;
    export { dashIfEmpty_6 as dashIfEmpty };
    const align_16: string;
    export { align_16 as align };
    const sort_96: string[];
    export { sort_96 as sort };
    const width_28: number;
    export { width_28 as width };
}
export namespace SCOPE_NORMAN {
    const value_106: string;
    export { value_106 as value };
    const sort_97: string[];
    export { sort_97 as sort };
}
export namespace EXPIRES {
    const name_108: string;
    export { name_108 as name };
    const value_107: string;
    export { value_107 as value };
    const labelKey_105: string;
    export { labelKey_105 as labelKey };
    const align_17: string;
    export { align_17 as align };
    const sort_98: string[];
    export { sort_98 as sort };
    const width_29: number;
    export { width_29 as width };
    const formatter_57: string;
    export { formatter_57 as formatter };
}
export namespace RESTART {
    const name_109: string;
    export { name_109 as name };
    const labelKey_106: string;
    export { labelKey_106 as labelKey };
    const value_108: string;
    export { value_108 as value };
    const sort_99: string[];
    export { sort_99 as sort };
    const formatter_58: string;
    export { formatter_58 as formatter };
    const width_30: number;
    export { width_30 as width };
    const align_18: string;
    export { align_18 as align };
}
export namespace ROLE {
    const name_110: string;
    export { name_110 as name };
    const value_109: string;
    export { value_109 as value };
    const labelKey_107: string;
    export { labelKey_107 as labelKey };
}
export namespace FEATURE_DESCRIPTION {
    const name_111: string;
    export { name_111 as name };
    const labelKey_108: string;
    export { labelKey_108 as labelKey };
    const value_110: string;
    export { value_110 as value };
    const align_19: string;
    export { align_19 as align };
    const sort_100: string[];
    export { sort_100 as sort };
    const formatter_59: string;
    export { formatter_59 as formatter };
    export namespace formatterOpts_14 {
        const prefix: string;
    }
    export { formatterOpts_14 as formatterOpts };
}
export namespace STATE_NORMAN {
    const name_112: string;
    export { name_112 as name };
    const labelKey_109: string;
    export { labelKey_109 as labelKey };
    const sort_101: string[];
    export { sort_101 as sort };
    const value_111: string;
    export { value_111 as value };
    const width_31: number;
    export { width_31 as width };
    const _default_3: string;
    export { _default_3 as default };
    const formatter_60: string;
    export { formatter_60 as formatter };
}
export namespace KUBE_NODE_OS {
    const name_113: string;
    export { name_113 as name };
    const labelKey_110: string;
    export { labelKey_110 as labelKey };
    const value_112: string;
    export { value_112 as value };
    const sort_102: string[];
    export { sort_102 as sort };
    const formatter_61: string;
    export { formatter_61 as formatter };
}
export namespace MACHINE_NODE_OS {
    const name_114: string;
    export { name_114 as name };
    const labelKey_111: string;
    export { labelKey_111 as labelKey };
    const value_113: string;
    export { value_113 as value };
    const sort_103: string[];
    export { sort_103 as sort };
    const formatter_62: string;
    export { formatter_62 as formatter };
    const dashIfEmpty_7: boolean;
    export { dashIfEmpty_7 as dashIfEmpty };
}
export namespace MANAGEMENT_NODE_OS {
    const name_115: string;
    export { name_115 as name };
    const labelKey_112: string;
    export { labelKey_112 as labelKey };
    const value_114: string;
    export { value_114 as value };
    const sort_104: string[];
    export { sort_104 as sort };
    const formatter_63: string;
    export { formatter_63 as formatter };
    const dashIfEmpty_8: boolean;
    export { dashIfEmpty_8 as dashIfEmpty };
}
export namespace FLEET_BUNDLE_LAST_UPDATED {
    const name_116: string;
    export { name_116 as name };
    const labelKey_113: string;
    export { labelKey_113 as labelKey };
    const value_115: string;
    export { value_115 as value };
    const formatter_64: string;
    export { formatter_64 as formatter };
    export namespace formatterOpts_15 {
        const addSuffix_3: boolean;
        export { addSuffix_3 as addSuffix };
    }
    export { formatterOpts_15 as formatterOpts };
    const sort_105: string[];
    export { sort_105 as sort };
}
export namespace FLEET_BUNDLE_TYPE {
    const name_117: string;
    export { name_117 as name };
    const labelKey_114: string;
    export { labelKey_114 as labelKey };
    const value_116: string;
    export { value_116 as value };
    const sort_106: string[];
    export { sort_106 as sort };
    const width_32: number;
    export { width_32 as width };
}
export namespace FLEET_REPO_CLUSTERS_READY {
    const name_118: string;
    export { name_118 as name };
    const labelKey_115: string;
    export { labelKey_115 as labelKey };
    const value_117: string;
    export { value_117 as value };
    const sort_107: string;
    export { sort_107 as sort };
    const search_13: boolean;
    export { search_13 as search };
}
export namespace FLEET_REPO_TARGET {
    const name_119: string;
    export { name_119 as name };
    const labelKey_116: string;
    export { labelKey_116 as labelKey };
    const value_118: string;
    export { value_118 as value };
    const sort_108: string[];
    export { sort_108 as sort };
}
export namespace FLEET_REPO {
    const name_120: string;
    export { name_120 as name };
    const labelKey_117: string;
    export { labelKey_117 as labelKey };
    const value_119: string;
    export { value_119 as value };
    const sort_109: string;
    export { sort_109 as sort };
    const search_14: string[];
    export { search_14 as search };
}
export const UI_PLUGIN_CATALOG: ({
    name: string;
    labelKey: string;
    sort: string[];
    value: string;
    width: number;
    default: string;
    formatter: string;
    formatterOpts: {
        arbitrary: boolean;
    };
} | {
    name: string;
    labelKey: string;
    value: string;
    sort: string[];
    formatter: string;
    width?: undefined;
    default?: undefined;
    formatterOpts?: undefined;
} | {
    name: string;
    sort: string[];
    labelKey: string;
    value: string;
    width?: undefined;
    default?: undefined;
    formatter?: undefined;
    formatterOpts?: undefined;
})[];
}

// @shell/config/types

declare module '@shell/config/types' {
export namespace STEVE {
    const PREFERENCE: string;
    const SCHEMA_DEFINITION: string;
}
export namespace NORMAN {
    const APP: string;
    const AUTH_CONFIG: string;
    const ETCD_BACKUP: string;
    const CLUSTER: string;
    const CLUSTER_TOKEN: string;
    const CLUSTER_ROLE_TEMPLATE_BINDING: string;
    const CLOUD_CREDENTIAL: string;
    const FLEET_WORKSPACES: string;
    const GLOBAL_ROLE: string;
    const GLOBAL_ROLE_BINDING: string;
    const NODE_POOL: string;
    const NODE: string;
    const PRINCIPAL: string;
    const PROJECT: string;
    const PROJECT_ROLE_TEMPLATE_BINDING: string;
    const SETTING: string;
    namespace SPOOFED {
        const GROUP_PRINCIPAL: string;
    }
    const ROLE_TEMPLATE: string;
    const TOKEN: string;
    const USER: string;
    const KONTAINER_DRIVER: string;
    const NODE_DRIVER: string;
}
export namespace PUBLIC {
    const AUTH_PROVIDER: string;
}
export const API_GROUP: "apiGroups";
export const API_SERVICE: "apiregistration.k8s.io.apiservice";
export const CONFIG_MAP: "configmap";
export const COUNT: "count";
export const EVENT: "event";
export const ENDPOINTS: "endpoints";
export const HPA: "autoscaling.horizontalpodautoscaler";
export const INGRESS: "networking.k8s.io.ingress";
export const INGRESS_CLASS: "networking.k8s.io.ingressclass";
export const LIMIT_RANGE: "limitrange";
export const NAMESPACE: "namespace";
export const NODE: "node";
export const NETWORK_POLICY: "networking.k8s.io.networkpolicy";
export const POD: "pod";
export const POD_DISRUPTION_BUDGET: "policy.poddisruptionbudget";
export const PV: "persistentvolume";
export const PVC: "persistentvolumeclaim";
export const RESOURCE_QUOTA: "resourcequota";
export const SCHEMA: "schema";
export const SERVICE: "service";
export const SECRET: "secret";
export const SERVICE_ACCOUNT: "serviceaccount";
export const STORAGE_CLASS: "storage.k8s.io.storageclass";
export const CSI_DRIVER: "storage.k8s.io.csidriver";
export const OBJECT_META: "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta";
export const NETWORK_ATTACHMENT: "k8s.cni.cncf.io.networkattachmentdefinition";
export const USER: "user";
export const GROUP: "group";
export namespace RBAC {
    const ROLE: string;
    const CLUSTER_ROLE: string;
    const ROLE_BINDING: string;
    const CLUSTER_ROLE_BINDING: string;
}
export const WORKLOAD: "workload";
export namespace WORKLOAD_TYPES {
    const DEPLOYMENT: string;
    const CRON_JOB: string;
    const DAEMON_SET: string;
    const JOB: string;
    const STATEFUL_SET: string;
    const REPLICA_SET: string;
    const REPLICATION_CONTROLLER: string;
}
export const WORKLOAD_TYPE_TO_KIND_MAPPING: {
    [x: string]: string;
};
export const METRICS_SUPPORTED_KINDS: string[];
export namespace SCALABLE_WORKLOAD_TYPES { }
export namespace LIST_WORKLOAD_TYPES {
    export { POD };
}
export namespace METRIC {
    const NODE_1: string;
    export { NODE_1 as NODE };
    const POD_1: string;
    export { POD_1 as POD };
}
export namespace CATALOG {
    export const CLUSTER_REPO: string;
    export const OPERATION: string;
    const APP_1: string;
    export { APP_1 as APP };
    export const REPO: string;
}
export const UI_PLUGIN: "catalog.cattle.io.uiplugin";
export namespace HELM {
    const PROJECTHELMCHART: string;
}
export namespace MONITORING {
    export const ALERTMANAGER: string;
    export const ALERTMANAGERCONFIG: string;
    export const PODMONITOR: string;
    export const PROMETHEUS: string;
    export const PROMETHEUSRULE: string;
    export const SERVICEMONITOR: string;
    export const THANOSRULER: string;
    export namespace SPOOFED_1 {
        const RECEIVER: string;
        const RECEIVER_SPEC: string;
        const RECEIVER_EMAIL: string;
        const RECEIVER_SLACK: string;
        const RECEIVER_WEBHOOK: string;
        const RECEIVER_PAGERDUTY: string;
        const RECEIVER_OPSGENIE: string;
        const RECEIVER_HTTP_CONFIG: string;
        const RESPONDER: string;
        const ROUTE: string;
        const ROUTE_SPEC: string;
    }
    export { SPOOFED_1 as SPOOFED };
}
export namespace LONGHORN {
    const ENGINES: string;
    const ENGINE_IMAGES: string;
    const NODES: string;
    const REPLICAS: string;
    const SETTINGS: string;
    const VOLUMES: string;
}
export const LONGHORN_DRIVER: "driver.longhorn.io";
export const LONGHORN_VERSION_V1: "LonghornV1";
export const LONGHORN_VERSION_V2: "LonghornV2";
export const SNAPSHOT: "rke.cattle.io.etcdsnapshot";
export namespace MANAGEMENT {
    const AUTH_CONFIG_1: string;
    export { AUTH_CONFIG_1 as AUTH_CONFIG };
    export const CATALOG_TEMPLATE: string;
    const CLUSTER_1: string;
    export { CLUSTER_1 as CLUSTER };
    const CLUSTER_ROLE_TEMPLATE_BINDING_1: string;
    export { CLUSTER_ROLE_TEMPLATE_BINDING_1 as CLUSTER_ROLE_TEMPLATE_BINDING };
    export const FEATURE: string;
    const KONTAINER_DRIVER_1: string;
    export { KONTAINER_DRIVER_1 as KONTAINER_DRIVER };
    export const MULTI_CLUSTER_APP: string;
    const NODE_2: string;
    export { NODE_2 as NODE };
    const NODE_DRIVER_1: string;
    export { NODE_DRIVER_1 as NODE_DRIVER };
    const NODE_POOL_1: string;
    export { NODE_POOL_1 as NODE_POOL };
    export const NODE_TEMPLATE: string;
    const PROJECT_1: string;
    export { PROJECT_1 as PROJECT };
    const PROJECT_ROLE_TEMPLATE_BINDING_1: string;
    export { PROJECT_ROLE_TEMPLATE_BINDING_1 as PROJECT_ROLE_TEMPLATE_BINDING };
    const ROLE_TEMPLATE_1: string;
    export { ROLE_TEMPLATE_1 as ROLE_TEMPLATE };
    const SETTING_1: string;
    export { SETTING_1 as SETTING };
    const USER_1: string;
    export { USER_1 as USER };
    const TOKEN_1: string;
    export { TOKEN_1 as TOKEN };
    const GLOBAL_ROLE_1: string;
    export { GLOBAL_ROLE_1 as GLOBAL_ROLE };
    const GLOBAL_ROLE_BINDING_1: string;
    export { GLOBAL_ROLE_BINDING_1 as GLOBAL_ROLE_BINDING };
    export const PSA: string;
    export const MANAGED_CHART: string;
    export const USER_NOTIFICATION: string;
    export const GLOBAL_DNS_PROVIDER: string;
    export const RKE_TEMPLATE: string;
    export const RKE_TEMPLATE_REVISION: string;
    export const CLUSTER_PROXY_CONFIG: string;
}
export namespace CAPI {
    const CAPI_CLUSTER: string;
    const MACHINE_DEPLOYMENT: string;
    const MACHINE_SET: string;
    const MACHINE: string;
    const RANCHER_CLUSTER: string;
    const MACHINE_CONFIG_GROUP: string;
}
export namespace FLEET {
    export const BUNDLE: string;
    export const BUNDLE_DEPLOYMENT: string;
    const CLUSTER_2: string;
    export { CLUSTER_2 as CLUSTER };
    export const CLUSTER_GROUP: string;
    export const DASHBOARD: string;
    export const GIT_REPO: string;
    export const WORKSPACE: string;
    const TOKEN_2: string;
    export { TOKEN_2 as TOKEN };
    export const BUNDLE_NAMESPACE_MAPPING: string;
    export const GIT_REPO_RESTRICTION: string;
}
export namespace GATEKEEPER {
    export const CONSTRAINT_TEMPLATE: string;
    export namespace SPOOFED_2 {
        const CONSTRAINT: string;
    }
    export { SPOOFED_2 as SPOOFED };
}
export namespace ISTIO {
    const VIRTUAL_SERVICE: string;
    const DESTINATION_RULE: string;
    const GATEWAY: string;
}
export namespace LOGGING {
    export const CLUSTER_FLOW: string;
    export const CLUSTER_OUTPUT: string;
    export const FLOW: string;
    export const OUTPUT: string;
    export namespace SPOOFED_3 {
        export const FILTERS: string;
        export const FILTER: string;
        export const CONCAT: string;
        export const DEDOT: string;
        export const DETECTEXCEPTIONS: string;
        export const GEOIP: string;
        export const GREP: string;
        export const PARSER: string;
        const PROMETHEUS_1: string;
        export { PROMETHEUS_1 as PROMETHEUS };
        export const RECORD_MODIFIER: string;
        export const RECORD_TRANSFORMER: string;
        export const STDOUT: string;
        export const SUMOLOGIC: string;
        export const TAG_NORMALISER: string;
        export const THROTTLE: string;
        export const RECORD: string;
        export const REGEXPSECTION: string;
        export const EXCLUDESECTION: string;
        export const ORSECTION: string;
        export const ANDSECTION: string;
        export const PARSESECTION: string;
        export const METRICSECTION: string;
        export const REPLACE: string;
        export const SINGLEPARSESECTION: string;
    }
    export { SPOOFED_3 as SPOOFED };
}
export namespace BACKUP_RESTORE {
    const RESOURCE_SET: string;
    const BACKUP: string;
    const RESTORE: string;
}
export namespace CIS {
    const CLUSTER_SCAN: string;
    const CLUSTER_SCAN_PROFILE: string;
    const BENCHMARK: string;
    const REPORT: string;
}
export namespace UI {
    const NAV_LINK: string;
}
export namespace VIRTUAL_TYPES {
    const CLUSTER_MEMBERS: string;
    const PROJECT_NAMESPACES: string;
    const NAMESPACES: string;
    const JWT_AUTHENTICATION: string;
}
export namespace HCI {
    const CLUSTER_3: string;
    export { CLUSTER_3 as CLUSTER };
    const DASHBOARD_1: string;
    export { DASHBOARD_1 as DASHBOARD };
    export const IMAGE: string;
    export const VGPU_DEVICE: string;
    const SETTING_2: string;
    export { SETTING_2 as SETTING };
    export const RESOURCE_QUOTA: string;
    export const HARVESTER_CONFIG: string;
}
export const VIRTUAL_HARVESTER_PROVIDER: "harvester";
export namespace ADDRESSES {
    const HOSTNAME: string;
    const INTERNAL_IP: string;
    const EXTERNAL_IP: string;
}
export const DEFAULT_WORKSPACE: "fleet-default";
export namespace AUTH_TYPE {
    const _NONE: string;
    const _BASIC: string;
    const _SSH: string;
    const _S3: string;
}
export const LOCAL_CLUSTER: "local";
export namespace CLUSTER_REPO_TYPES {
    export const HELM_URL: string;
    const GIT_REPO_1: string;
    export { GIT_REPO_1 as GIT_REPO };
    export const OCI_URL: string;
}
export const ZERO_TIME: "0001-01-01T00:00:00Z";
export const DEFAULT_GRAFANA_STORAGE_SIZE: "10Gi";
export const DEPRECATED: "Deprecated";
export const EXPERIMENTAL: "Experimental";
}

// @shell/mixins/create-edit-view/impl

declare module '@shell/mixins/create-edit-view/impl' {
declare namespace _default {
    const name: string;
    const mixins: any[];
    const emits: string[];
    function data(): {
        errors: any[];
    };
    function data(): {
        errors: any[];
    };
    namespace computed {
        function isCreate(): boolean;
        function isCreate(): boolean;
        function isEdit(): boolean;
        function isEdit(): boolean;
        function isView(): boolean;
        function isView(): boolean;
        function schema(): any;
        function schema(): any;
        function isNamespaced(): any;
        function isNamespaced(): any;
        namespace labels {
            function get(): any;
            function get(): any;
            function set(neu: any): void;
            function set(neu: any): void;
        }
        namespace annotations {
            function get(): any;
            function get(): any;
            function set(neu: any): void;
            function set(neu: any): void;
        }
        function doneRoute(): any;
        function doneRoute(): any;
        function doneParams(): any;
        function doneParams(): any;
    }
    namespace methods {
        function done(): any;
        function done(): any;
        function conflict(): Promise<any>;
        function conflict(): Promise<any>;
        function save(buttonDone: any, url: any, depth?: number): any;
        function save(buttonDone: any, url: any, depth?: number): any;
        function actuallySave(url: any): Promise<void>;
        function actuallySave(url: any): Promise<void>;
        function setErrors(errors: any): void;
        function setErrors(errors: any): void;
    }
}
export default _default;
}

// @shell/mixins/create-edit-view

declare module '@shell/mixins/create-edit-view' {
declare var _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: any;
    };
    realMode: {
        type: StringConstructor;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
    value: {
        type: ObjectConstructor;
        required: true;
    };
    initialValue: {
        type: ObjectConstructor;
        default: any;
    };
    liveValue: {
        type: ObjectConstructor;
        default: any;
    };
    doneEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, {
    errors: any[];
}, {
    isCreate(): boolean;
    isEdit(): boolean;
    isView(): boolean;
    schema(): any;
    isNamespaced(): any;
    labels: {
        get(): any;
        set(neu: any): void;
    };
    annotations: {
        get(): any;
        set(neu: any): void;
    };
    doneRoute(): any;
    doneParams(): any;
}, {
    done(): any;
    conflict(): Promise<any>;
    save(buttonDone: any, url: any, depth?: number): any;
    actuallySave(url: any): Promise<void>;
    setErrors(errors: any): void;
}, any, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: any;
    };
    realMode: {
        type: StringConstructor;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
    value: {
        type: ObjectConstructor;
        required: true;
    };
    initialValue: {
        type: ObjectConstructor;
        default: any;
    };
    liveValue: {
        type: ObjectConstructor;
        default: any;
    };
    doneEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    [x: string & `on${string}`]: (...args: any[]) => any;
}, {
    mode: string;
    as: string;
    doneEvent: boolean;
    initialValue: Record<string, any>;
    liveValue: Record<string, any>;
    realMode: string;
}>;
export default _default;
}

// @shell/mixins/resource-fetch

declare module '@shell/mixins/resource-fetch' {
declare namespace _default {
    const mixins: any[];
    const inheritAttrs: boolean;
    function data(): {
        perfConfig: {};
        init: boolean;
        multipleResources: any[];
        loadResources: any[];
        hasManualRefresh: boolean;
        watch: boolean;
        isTooManyItemsToAutoUpdate: boolean;
        force: boolean;
        incremental: boolean;
        fetchedResourceType: any[];
        paginating: any;
    };
    function data(): {
        perfConfig: {};
        init: boolean;
        multipleResources: any[];
        loadResources: any[];
        hasManualRefresh: boolean;
        watch: boolean;
        isTooManyItemsToAutoUpdate: boolean;
        force: boolean;
        incremental: boolean;
        fetchedResourceType: any[];
        paginating: any;
    };
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace computed {
        function rows(): any;
        function rows(): any;
        function loading(): any;
        function loading(): any;
        const refreshFlag: import("vuex").Computed;
    }
    namespace watch {
        function refreshFlag(neu: any): Promise<void>;
        function refreshFlag(neu: any): Promise<void>;
    }
    namespace methods {
        function $initializeFetchData(type: any, multipleResources: any[], storeType: any): void;
        function $initializeFetchData(type: any, multipleResources: any[], storeType: any): void;
        function $fetchType(type: any, multipleResources: any[], storeType: any): any;
        function $fetchType(type: any, multipleResources: any[], storeType: any): any;
        function __getCountForResources(resourceNames: any, namespace: any, storeType: any): any;
        function __getCountForResources(resourceNames: any, namespace: any, storeType: any): any;
        function __getCountForResource(resourceName: any, namespace: any, storeType: any): any;
        function __getCountForResource(resourceName: any, namespace: any, storeType: any): any;
        function __gatherResourceFetchData(resourceName: any, multipleResources: any, currStore: any): void;
        function __gatherResourceFetchData(resourceName: any, multipleResources: any, currStore: any): void;
    }
}
export default _default;
}

// @shell/models/namespace

declare module '@shell/models/namespace' {
export default class Namespace {
    applyDefaults(): void;
    get _availableActions(): any;
    move(resources?: Namespace): void;
    get isSystem(): any;
    get isFleetManaged(): boolean;
    get isObscure(): any;
    get projectId(): any;
    get project(): any;
    get groupByLabel(): any;
    get projectNameSort(): any;
    get istioInstalled(): boolean;
    get injectionEnabled(): boolean;
    enableAutoInjection(namespaces?: Namespace, enable?: boolean): void;
    disableAutoInjection(namespaces?: Namespace): void;
    get confirmRemove(): boolean;
    get listLocation(): {
        name: string;
    };
    get _detailLocation(): any;
    get parentLocationOverride(): {
        name: string;
    };
    get doneOverride(): {
        name: string;
    };
    set resourceQuota(arg: any);
    get resourceQuota(): any;
    get detailTopTooltips(): any;
    get detailTopIcons(): any;
    /**
     * Check if resource contains PSA labels
     */
    get hasSystemLabels(): any;
    get filteredSystemLabels(): {};
    /**
     * Generate list of present keys which can be filtered based on existing label keys and system keys
     */
    get systemLabels(): any;
    get psaTooltipsDescription(): any;
    cleanForNew(): void;
    metadata: any;
    get hideDetailLocation(): boolean;
}
}

// @shell/models/networking.k8s.io.ingress

declare module '@shell/models/networking.k8s.io.ingress' {
export function ingressFullPath(resource: any, rule: any, path?: {}): string;
export default class Ingress {
    get tlsHosts(): any;
    get isTlsHost(): (host: any) => any;
    targetTo(workloads: any, serviceName: any): any;
    createRulesForListPage(workloads: any, certificates: any): any;
    createPathForListPage(workloads: any, rule: any, path: any, certificates: any): {
        isUrl: boolean;
        pathType: any;
        fullPath: string;
        serviceName: any;
        serviceTargetTo: any;
        certs: any;
        targetLink: {
            to: any;
            text: any;
            options: {
                internal: boolean;
            };
        };
        port: any;
    };
    fullPath(rule: any, path: any): string;
    certLink(cert: any, certificates?: any[]): {
        to: {
            name: string;
            params: {
                resource: any;
                id: any;
            };
        };
        text: any;
        options: {
            internal: boolean;
        };
    };
    certLinks(rule: any, certificates: any): any;
    targetLink(workloads: any, serviceName: any): {
        to: any;
        text: any;
        options: {
            internal: boolean;
        };
    };
    createDefaultService(workloads: any): {
        name: any;
        targetTo: any;
    };
    get cache(): {};
    cacheObject: {};
    get showPathType(): any;
    get useNestedBackendField(): any;
    get serviceNamePath(): "service.name" | "serviceName";
    get servicePortPath(): "service.port.number" | "servicePort";
    get defaultBackendPath(): "defaultBackend" | "backend";
    get hasDefaultBackend(): boolean;
    get details(): any;
}
}

// @shell/plugins/dashboard-store/actions

declare module '@shell/plugins/dashboard-store/actions' {
export function handleSpoofedRequest(rootGetters: any, schemaStore: any, opt: any, product: any): Promise<any>;
export function loadSchemas(ctx: any, watch?: boolean): Promise<any>;
export const _ALL: "all";
export const _MERGE: "merge";
export const _MULTI: "multi";
export const _NONE: "none";
declare namespace _default {
    export function request(): never;
    export function request(): never;
    export { loadSchemas };
    export function loadDataPage(ctx: any, { type, opt }: {
        type: any;
        opt: any;
    }): Promise<never>;
    export function loadDataPage(ctx: any, { type, opt }: {
        type: any;
        opt: any;
    }): Promise<never>;
    /**
     *
     * @param {*} ctx
     * @param { {type: string, opt: ActionFindPageArgs} } opt
     */
    export function findAll(ctx: any, { type, opt }: {
        type: string;
        opt: ActionFindPageArgs;
    }): Promise<any>;
    /**
     *
     * @param {*} ctx
     * @param { {type: string, opt: ActionFindPageArgs} } opt
     */
    export function findAll(ctx: any, { type, opt }: {
        type: string;
        opt: ActionFindPageArgs;
    }): Promise<any>;
    /**
     *
     * @param {*} ctx
     * @param { {type: string, opt: FindPageOpt} } opt
     */
    export function findPage(ctx: any, { type, opt }: {
        type: string;
        opt: FindPageOpt;
    }): Promise<any>;
    /**
     *
     * @param {*} ctx
     * @param { {type: string, opt: FindPageOpt} } opt
     */
    export function findPage(ctx: any, { type, opt }: {
        type: string;
        opt: FindPageOpt;
    }): Promise<any>;
    export function findMatching(ctx: any, { type, selector, opt, namespace }: {
        type: any;
        selector: any;
        opt: any;
        namespace: any;
    }): Promise<any>;
    export function findMatching(ctx: any, { type, selector, opt, namespace }: {
        type: any;
        selector: any;
        opt: any;
        namespace: any;
    }): Promise<any>;
    export function find(ctx: any, { type, id, opt }: {
        type: any;
        id: any;
        opt: any;
    }): Promise<any>;
    export function find(ctx: any, { type, id, opt }: {
        type: any;
        id: any;
        opt: any;
    }): Promise<any>;
    export function load(ctx: any, { data, existing }: {
        data: any;
        existing: any;
    }): any;
    export function load(ctx: any, { data, existing }: {
        data: any;
        existing: any;
    }): any;
    export function loadMulti(ctx: any, data: any): void;
    export function loadMulti(ctx: any, data: any): void;
    export function batchChanges(ctx: any, batch: any): void;
    export function batchChanges(ctx: any, batch: any): void;
    export function loadAll(ctx: any, { type, data }: {
        type: any;
        data: any;
    }): void;
    export function loadAll(ctx: any, { type, data }: {
        type: any;
        data: any;
    }): void;
    export function create(ctx: any, data: any): any;
    export function create(ctx: any, data: any): any;
    export function createMany(ctx: any, data: any): any;
    export function createMany(ctx: any, data: any): any;
    export function createPopulated(ctx: any, userData: any): Promise<any>;
    export function createPopulated(ctx: any, userData: any): Promise<any>;
    export function clone(ctx: any, { resource }?: {
        resource: any;
    }): any;
    export function clone(ctx: any, { resource }?: {
        resource: any;
    }): any;
    export function forgetType({ commit, dispatch, state }: {
        commit: any;
        dispatch: any;
        state: any;
    }, type: any): void;
    export function forgetType({ commit, dispatch, state }: {
        commit: any;
        dispatch: any;
        state: any;
    }, type: any): void;
    export function promptRemove({ commit, state }: {
        commit: any;
        state: any;
    }, resources: any): void;
    export function promptRemove({ commit, state }: {
        commit: any;
        state: any;
    }, resources: any): void;
    export function promptModal({ commit, state }: {
        commit: any;
        state: any;
    }, data: any): void;
    export function promptModal({ commit, state }: {
        commit: any;
        state: any;
    }, data: any): void;
    export function resourceAction({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }, { resource, actionName, body, opt, }: {
        resource: any;
        actionName: any;
        body: any;
        opt: any;
    }): never;
    export function resourceAction({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }, { resource, actionName, body, opt, }: {
        resource: any;
        actionName: any;
        body: any;
        opt: any;
    }): never;
    export function collectionAction({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }, { type, actionName, body, opt }: {
        type: any;
        actionName: any;
        body: any;
        opt: any;
    }): never;
    export function collectionAction({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }, { type, actionName, body, opt }: {
        type: any;
        actionName: any;
        body: any;
        opt: any;
    }): never;
    export function cleanForNew(ctx: any, resource: any): never;
    export function cleanForNew(ctx: any, resource: any): never;
    export function createNamespace(ctx: any, resource: any): never;
    export function createNamespace(ctx: any, resource: any): never;
    export function cleanForDiff(ctx: any, resource: any): never;
    export function cleanForDiff(ctx: any, resource: any): never;
    export function cleanForDetail(ctx: any, resource: any): any;
    export function cleanForDetail(ctx: any, resource: any): any;
    export function cleanForDownload(ctx: any, resource: any): any;
    export function cleanForDownload(ctx: any, resource: any): any;
    export function waitForSchema({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }, { type }: {
        type: any;
    }): Promise<void>;
    export function waitForSchema({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }, { type }: {
        type: any;
    }): Promise<void>;
    export function waitForHaveAll({ getters }: {
        getters: any;
    }, { type, throwError, attempts }: {
        type: any;
        throwError?: boolean;
        attempts?: number;
    }): Promise<void>;
    export function waitForHaveAll({ getters }: {
        getters: any;
    }, { type, throwError, attempts }: {
        type: any;
        throwError?: boolean;
        attempts?: number;
    }): Promise<void>;
    export function incrementLoadCounter({ commit }: {
        commit: any;
    }, resource: any): void;
    export function incrementLoadCounter({ commit }: {
        commit: any;
    }, resource: any): void;
    export function garbageCollect(ctx: any, ignoreTypes: any): any;
    export function garbageCollect(ctx: any, ignoreTypes: any): any;
    export function gcResetStore({ state }: {
        state: any;
    }): void;
    export function gcResetStore({ state }: {
        state: any;
    }): void;
}
export default _default;
}

// @shell/plugins/dashboard-store/classify

declare module '@shell/plugins/dashboard-store/classify' {
export function classify(ctx: any, obj: any, isClone?: boolean): any;
export const BY_TYPE: "byType";
export const SELF: "__[[SELF]]__";
}

// @shell/plugins/dashboard-store/normalize

declare module '@shell/plugins/dashboard-store/normalize' {
export function keyFieldFor(type: any): string;
export function normalizeType(type: any): any;
export function handleConflict(initialValueJSON: any, value: any, liveValue: any, rootGetters: any, store: any, storeNamespace: any): Promise<false | any[]>;
export const KEY_FIELD_FOR: {
    [x: number]: string;
    default: string;
};
}

// @shell/plugins/dashboard-store/resource-class

declare module '@shell/plugins/dashboard-store/resource-class' {
export function mapStateToEnum(statusString: any): string;
export function getStatesByType(type?: string): {
    info: any[];
    error: any[];
    success: any[];
    warning: any[];
    unknown: any[];
};
export function getStateLabel(state: any): string;
export function colorForState(state: any, isError: any, isTransitioning: any): string;
export function stateDisplay(state: any): any;
export function primaryDisplayStatusFromCount(status: any): string;
export function stateSort(color: any, display: any): string;
export function isConditionReadyAndWaiting(condition: any): boolean;
export const DNS_LIKE_TYPES: string[];
export namespace STATES_ENUM {
    const IN_USE: string;
    const IN_PROGRESS: string;
    const PENDING_ROLLBACK: string;
    const PENDING_UPGRADE: string;
    const ABORTED: string;
    const ACTIVATING: string;
    const ACTIVE: string;
    const AVAILABLE: string;
    const BACKED_UP: string;
    const BOUND: string;
    const BUILDING: string;
    const COMPLETED: string;
    const CORDONED: string;
    const COUNT: string;
    const CREATED: string;
    const CREATING: string;
    const DEACTIVATING: string;
    const DEGRADED: string;
    const DENIED: string;
    const DEPLOYED: string;
    const DEPLOYING: string;
    const DISABLED: string;
    const DISCONNECTED: string;
    const DRAINED: string;
    const DRAINING: string;
    const ENABLED: string;
    const ERR_APPLIED: string;
    const ERROR: string;
    const ERRORING: string;
    const ERRORS: string;
    const EXPIRED: string;
    const EXPIRING: string;
    const FAIL: string;
    const FAILED: string;
    const HEALTHY: string;
    const INACTIVE: string;
    const INFO: string;
    const INITIALIZING: string;
    const INPROGRESS: string;
    const LOCKED: string;
    const MIGRATING: string;
    const MISSING: string;
    const MODIFIED: string;
    const NOT_APPLICABLE: string;
    const NOT_APLLIED: string;
    const NOT_READY: string;
    const OFF: string;
    const ORPHANED: string;
    const OTHER: string;
    const OUT_OF_SYNC: string;
    const ON_GOING: string;
    const PASS: string;
    const PASSED: string;
    const PAUSED: string;
    const PENDING: string;
    const PROVISIONING: string;
    const PROVISIONED: string;
    const PURGED: string;
    const PURGING: string;
    const READY: string;
    const RECONNECTING: string;
    const REGISTERING: string;
    const REINITIALIZING: string;
    const RELEASED: string;
    const REMOVED: string;
    const REMOVING: string;
    const REQUESTED: string;
    const RESTARTING: string;
    const RESTORING: string;
    const RESIZING: string;
    const RUNNING: string;
    const SKIP: string;
    const SKIPPED: string;
    const STARTING: string;
    const STOPPED: string;
    const STOPPING: string;
    const SUCCEEDED: string;
    const SUCCESS: string;
    const SUCCESSFUL: string;
    const SUPERSEDED: string;
    const SUSPENDED: string;
    const UNAVAILABLE: string;
    const UNHEALTHY: string;
    const UNINSTALLED: string;
    const UNINSTALLING: string;
    const UNKNOWN: string;
    const UNTRIGGERED: string;
    const UPDATING: string;
    const WAIT_APPLIED: string;
    const WAIT_CHECKIN: string;
    const WAITING: string;
    const WARNING: string;
}
export const STATES: {
    [x: string]: {
        color: string;
        icon: string;
        label: string;
        compoundIcon: string;
    } | {
        color: string;
        icon: string;
        label: string;
        compoundIcon?: undefined;
    };
};
export default class Resource {
    constructor(data: any, ctx?: {}, rehydrateNamespace?: any, setClone?: boolean);
    get $getters(): any;
    get $rootGetters(): any;
    get $dispatch(): any;
    get $state(): any;
    get $rootState(): any;
    get customValidationRules(): any[];
    get _key(): any;
    get schema(): any;
    toString(): string;
    get typeDisplay(): any;
    get nameDisplay(): any;
    get nameSort(): any;
    get namespacedName(): any;
    get namespacedNameSort(): any;
    get groupByLabel(): any;
    setLabels(): void;
    setLabel(): void;
    setAnnotations(val: any): void;
    setAnnotation(key: any, val: any): void;
    get stateDisplay(): any;
    get stateColor(): any;
    get stateBackground(): any;
    get stateIcon(): string;
    get stateSort(): string;
    get stateDescription(): any;
    get stateObj(): any;
    waitForTestFn(fn: any, msg: any, timeoutMs: any, intervalMs: any): any;
    waitForState(state: any, timeout: any, interval: any): any;
    waitForTransition(): any;
    waitForAction(name: any): any;
    waitForLink(name: any): any;
    hasCondition(condition: any): boolean;
    isCondition(condition: any, withStatus?: string): boolean;
    waitForCondition(name: any, withStatus?: string, timeoutMs?: number, intervalMs?: number): any;
    get availableActions(): ({
        divider: boolean;
        action?: undefined;
        label?: undefined;
        icon?: undefined;
        enabled?: undefined;
        bulkable?: undefined;
        bulkAction?: undefined;
        weight?: undefined;
        altAction?: undefined;
    } | {
        action: string;
        label: any;
        icon: string;
        enabled: any;
        divider?: undefined;
        bulkable?: undefined;
        bulkAction?: undefined;
        weight?: undefined;
        altAction?: undefined;
    } | {
        action: string;
        label: any;
        icon: string;
        bulkable: boolean;
        bulkAction: string;
        enabled: boolean;
        weight: number;
        divider?: undefined;
        altAction?: undefined;
    } | {
        action: string;
        altAction: string;
        label: any;
        icon: string;
        bulkable: boolean;
        enabled: any;
        bulkAction: string;
        weight: number;
        divider?: undefined;
    })[];
    get _availableActions(): ({
        divider: boolean;
        action?: undefined;
        label?: undefined;
        icon?: undefined;
        enabled?: undefined;
        bulkable?: undefined;
        bulkAction?: undefined;
        weight?: undefined;
        altAction?: undefined;
    } | {
        action: string;
        label: any;
        icon: string;
        enabled: any;
        divider?: undefined;
        bulkable?: undefined;
        bulkAction?: undefined;
        weight?: undefined;
        altAction?: undefined;
    } | {
        action: string;
        label: any;
        icon: string;
        bulkable: boolean;
        bulkAction: string;
        enabled: boolean;
        weight: number;
        divider?: undefined;
        altAction?: undefined;
    } | {
        action: string;
        altAction: string;
        label: any;
        icon: string;
        bulkable: boolean;
        enabled: any;
        bulkAction: string;
        weight: number;
        divider?: undefined;
    })[];
    get canDelete(): any;
    get _canDelete(): any;
    get canClone(): boolean;
    get canUpdate(): any;
    get canCustomEdit(): any;
    get canCreate(): any;
    get canViewInApi(): any;
    get canYaml(): boolean;
    get canEditYaml(): any;
    hasLink(linkName: any): boolean;
    linkFor(linkName: any): any;
    followLink(linkName: any, opt?: {}): any;
    hasAction(actionName: any): boolean;
    actionLinkFor(actionName: any): any;
    doAction(actionName: any, body: any, opt?: {}): any;
    doActionGrowl(actionName: any, body: any, opt?: {}): Promise<any>;
    patch(data: any, opt?: {}, merge?: boolean, alertOnError?: boolean): any;
    save(...args: any[]): Promise<Resource>;
    /**
     * Remove any unwanted properties from the object that will be saved
     */
    cleanForSave(data: any, forNew: any): any;
    /**
     * Allow to handle the response of the save request
     * @param {*} res Full request response
     */
    processSaveResponse(res: any): void;
    _save(opt?: {}): Promise<Resource>;
    remove(...args: any[]): Promise<void>;
    _remove(opt?: {}): Promise<void>;
    currentRoute(): any;
    currentRouter(): any;
    get listLocation(): {
        name: string;
        params: {
            product: any;
            cluster: any;
            resource: any;
        };
    };
    get _detailLocation(): {
        name: string;
        params: {
            product: any;
            cluster: any;
            resource: any;
            namespace: any;
            id: any;
        };
    };
    get detailLocation(): {
        name: string;
        params: {
            product: any;
            cluster: any;
            resource: any;
            namespace: any;
            id: any;
        };
    };
    goToDetail(): void;
    /**
     * Resource action redirects to the detail page with a query parameter 'clone'
     * When the query parameter is present, the view will fetch the resource to clone define in the parameter
     * E.g.: /my-id?mode=clone
     * @param {*} moreQuery
     */
    goToClone(moreQuery?: any): void;
    goToEdit(moreQuery?: {}): void;
    goToViewConfig(moreQuery?: {}): void;
    goToEditYaml(): void;
    goToViewYaml(): void;
    cloneYaml(moreQuery?: {}): void;
    download(): Promise<void>;
    downloadBulk(items: any): Promise<void>;
    viewInApi(): void;
    promptRemove(resources: any): void;
    get confirmRemove(): boolean;
    applyDefaults(): void;
    get urlFromAttrs(): any;
    cleanYaml(yaml: any, mode?: string): any;
    cleanForNew(): void;
    cleanForDiff(): void;
    cleanForDownload(yaml: any): Promise<any>;
    yamlForSave(yaml: any): any;
    saveYaml(yaml: any): Promise<void>;
    _saveYaml(yaml: any): Promise<void>;
    get modelValidationRules(): {
        path: any;
        rules: any[];
    }[];
    customValidationErrors(data: any, ignorePaths?: any[]): any[];
    /**
     * Check this instance is valid against
     * - any custom dashboard validation
     *
     * Models can override this and call super.validationErrors
     */
    validationErrors(data?: Resource, opts?: {}): any[];
    get ownersByType(): {};
    get owners(): any[];
    get details(): ({
        label: any;
        formatter: string;
        content: {
            key: any;
            row: any;
            col: {};
            value: any;
        }[];
        formatterOpts?: undefined;
    } | {
        label: any;
        formatter: string;
        formatterOpts: {
            addSuffix: boolean;
        };
        content: any;
    })[];
    get _details(): ({
        label: any;
        formatter: string;
        content: {
            key: any;
            row: any;
            col: {};
            value: any;
        }[];
        formatterOpts?: undefined;
    } | {
        label: any;
        formatter: string;
        formatterOpts: {
            addSuffix: boolean;
        };
        content: any;
    })[];
    get t(): any;
    findOwners(): any[];
    getOwners(): any[];
    findOwned(): Promise<any[]>;
    _relationshipsFor(rel: any, direction: any): {
        selectors: any[];
        ids: any[];
    };
    _getRelationship(rel: any, direction: any): any[];
    _findRelationship(rel: any, direction: any): Promise<any[]>;
    get shortId(): any;
    toJSON(): {};
    /**
     * Allow models to override the object that is sent when saving this resource
     */
    toSave(): any;
    get creationTimestamp(): any;
    /**
     * Allows model to specify JSON Paths that should be folded in the YAML editor by default
     */
    get yamlFolding(): any[];
}
}

// @shell/plugins/steve/hybrid-class

declare module '@shell/plugins/steve/hybrid-class' {
export function cleanHybridResources(data: any): any;
export default class HybridModel {
    constructor(data: any, ctx: any, rehydrateNamespace?: any, setClone?: boolean);
    get labels(): any;
    setLabels(val: any): void;
    metadata: {};
    setLabel(key: any, val: any): void;
    get annotations(): any;
    setAnnotations(val: any): void;
    setAnnotation(key: any, val: any): void;
    get state(): any;
}
}

// @shell/plugins/steve/steve-class

declare module '@shell/plugins/steve/steve-class' {
export default class SteveModel extends HybridModel {
    get name(): any;
    get namespace(): any;
    /**
     * Set description based on the type of model available with private fallback
     */
    set description(arg: any);
    get description(): any;
    _description: any;
    cleanForSave(data: any, forNew: any): any;
}
import HybridModel from "./hybrid-class";
}

// @shell/store/features

declare module '@shell/store/features' {
export function create(name: any, defaultValue: any): any;
export function mapFeature(name: any): {
    get(): any;
    set(value: any): never;
};
export const MULTI_CLUSTER: any;
export const LEGACY: any;
export const RKE2: any;
export const RKE1_UI: any;
export const UNSUPPORTED_STORAGE_DRIVERS: any;
export const FLEET: any;
export const HARVESTER: any;
export const HARVESTER_CONTAINER: any;
export const FLEET_WORKSPACE_BACK: any;
export const STEVE_CACHE: any;
export const UIEXTENSION: any;
export const PROVISIONING_PRE_BOOTSTRAP: any;
export namespace getters {
    function get(state: any, getters: any, rootState: any, rootGetters: any): (name: any) => any;
}
export namespace actions {
    function loadServer({ rootGetters, dispatch }: {
        rootGetters: any;
        dispatch: any;
    }): Promise<any>;
    function loadServer({ rootGetters, dispatch }: {
        rootGetters: any;
        dispatch: any;
    }): Promise<any>;
}
}

// @shell/store/prefs

declare module '@shell/store/prefs' {
export function create(name: any, def: any, opt?: {}): any;
export function mapPref(name: any): {
    get(): any;
    set(value: any): void;
};
export const CLUSTER: any;
export const LAST_NAMESPACE: any;
export const NAMESPACE_FILTERS: any;
export const WORKSPACE: any;
export const EXPANDED_GROUPS: any;
export const FAVORITE_TYPES: any;
export const PINNED_CLUSTERS: any;
export const GROUP_RESOURCES: any;
export const DIFF: any;
export const THEME: any;
export const PREFERS_SCHEME: any;
export const LOCALE: any;
export const KEYMAP: any;
export const ROWS_PER_PAGE: any;
export const LOGS_WRAP: any;
export const LOGS_TIME: any;
export const LOGS_RANGE: any;
export const HIDE_REPOS: any;
export const HIDE_DESC: any;
export const HIDE_SENSITIVE: any;
export const SHOW_PRE_RELEASE: any;
export const SHOW_CHART_MODE: any;
export const DATE_FORMAT: any;
export const TIME_FORMAT: any;
export const TIME_ZONE: any;
export const DEV: any;
export const VIEW_IN_API: any;
export const ALL_NAMESPACES: any;
export const THEME_SHORTCUT: any;
export const LAST_VISITED: any;
export const SEEN_WHATS_NEW: any;
export const READ_WHATS_NEW: any;
export const AFTER_LOGIN_ROUTE: any;
export const HIDE_HOME_PAGE_CARDS: any;
export const PLUGIN_DEVELOPER: any;
export const _RKE1: "rke1";
export const _RKE2: "rke2";
export const PROVISIONER: any;
export const MENU_MAX_CLUSTERS: 10;
export const SCALE_POOL_PROMPT: any;
export function state(): {
    cookiesLoaded: boolean;
    data: {};
    definitions: {};
};
export namespace getters {
    function get(state: any): (key: any) => any;
    function defaultValue(state: any): (key: any) => any;
    function options(state: any): (key: any) => any;
    function theme(state: any, getters: any, rootState: any, rootGetters: any): any;
    function afterLoginRoute(state: any, getters: any): any;
    function dev(state: any, getters: any): any;
}
export namespace mutations {
    function load(state: any, { key, value }: {
        key: any;
        value: any;
    }): void;
    function load(state: any, { key, value }: {
        key: any;
        value: any;
    }): void;
    function cookiesLoaded(state: any): void;
    function cookiesLoaded(state: any): void;
    function reset(state: any): void;
    function reset(state: any): void;
    function setDefinition(state: any, { name, definition }: {
        name: any;
        definition?: {};
    }): void;
    function setDefinition(state: any, { name, definition }: {
        name: any;
        definition?: {};
    }): void;
}
export namespace actions {
    function set({ dispatch, commit, rootGetters, state }: {
        dispatch: any;
        commit: any;
        rootGetters: any;
        state: any;
    }, opt: any): Promise<{
        type: any;
        status: any;
    }>;
    function set({ dispatch, commit, rootGetters, state }: {
        dispatch: any;
        commit: any;
        rootGetters: any;
        state: any;
    }, opt: any): Promise<{
        type: any;
        status: any;
    }>;
    function setTheme({ dispatch }: {
        dispatch: any;
    }, val: any): Promise<void>;
    function setTheme({ dispatch }: {
        dispatch: any;
    }, val: any): Promise<void>;
    function loadCookies({ state, commit }: {
        state: any;
        commit: any;
    }): void;
    function loadCookies({ state, commit }: {
        state: any;
        commit: any;
    }): void;
    function loadTheme({ dispatch }: {
        dispatch: any;
    }): void;
    function loadTheme({ dispatch }: {
        dispatch: any;
    }): void;
    function loadServer({ state, dispatch, commit, rootState, rootGetters }: {
        state: any;
        dispatch: any;
        commit: any;
        rootState: any;
        rootGetters: any;
    }, ignoreKey: any): Promise<{
        data: {};
    }>;
    function loadServer({ state, dispatch, commit, rootState, rootGetters }: {
        state: any;
        dispatch: any;
        commit: any;
        rootState: any;
        rootGetters: any;
    }, ignoreKey: any): Promise<{
        data: {};
    }>;
    function setLastVisited({ state, dispatch, getters }: {
        state: any;
        dispatch: any;
        getters: any;
    }, route: any): any;
    function setLastVisited({ state, dispatch, getters }: {
        state: any;
        dispatch: any;
        getters: any;
    }, route: any): any;
    function toggleTheme({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }): any;
    function toggleTheme({ getters, dispatch }: {
        getters: any;
        dispatch: any;
    }): any;
    function setBrandStyle({ rootState, rootGetters }: {
        rootState: any;
        rootGetters: any;
    }, dark?: boolean): void;
    function setBrandStyle({ rootState, rootGetters }: {
        rootState: any;
        rootGetters: any;
    }, dark?: boolean): void;
}
}

// @shell/utils/alertmanagerconfig

declare module '@shell/utils/alertmanagerconfig' {
export function getSecretId(dispatch: any): Promise<string>;
export function getSecret(dispatch: any): Promise<any>;
export function loadConfig(dispatch: any): Promise<{
    config: any;
    secret: any;
}>;
export function updateConfig(dispatch: any, path: any, type: any, updateFn: any): Promise<void>;
export function getAllReceivers(dispatch: any): Promise<any[]>;
export function getAllRoutes(dispatch: any): Promise<any[]>;
export function createDefaultRouteName(index: any): string;
export function areRoutesSupportedFormat(secret: any): boolean;
export function canCreate(rootGetters: any): any;
export function fetchAlertManagerConfigSpecs($store: any): Promise<{
    receiverSchema: any;
    routeSchema: any;
}>;
export const FILENAME: "alertmanager.yaml";
}

// @shell/utils/auth

declare module '@shell/utils/auth' {
export function openAuthPopup(url: any, provider: any): any;
export function returnTo(opt: any, vm: any): string;
/**
 * Parses auth provider's info to return if there's an auth provider enabled
 */
export function parseAuthProvidersInfo(rows: any): {
    nonLocal: any;
    enabledLocation: {
        name: string;
        params: {
            id: any;
        };
        query: {
            mode: any;
        };
    };
    enabled: any;
};
/**
 * Attempt to set the product in our datastore if the route matches a known product. Otherwise show an error page instead.
 */
export function setProduct(store: any, to: any): any;
/**
 * Check that the resource is valid, if not redirect to fail whale
 *
 * This requires that
 * - product is set
 * - product's store is set and setup (so we can check schema's within it)
 * - product's store has the schemaFor getter (extension stores might not have it)
 * - there's a resource associated with route (meta or param)
 */
export function validateResource(store: any, to: any): boolean;
/**
 * Attempt to load the current user's principal
 */
export function findMe(store: any): Promise<any>;
/**
 * Attempt to login with default credentials. Note: I think that this may actually be outdated since we don't use these default credentials anymore on setup.
 */
export function tryInitialSetup(store: any, password?: string): Promise<boolean>;
/**
 * Record in our state management that we're indeed logged in
 */
export function isLoggedIn(store: any, me: any): void;
/**
 * Record in our state management that we're not logged in and then redirect to the login page
 */
export function notLoggedIn(store: any, redirect: any, route: any): any;
/**
 * Record in our state management that we don't have any auth providers
 */
export function noAuth(store: any): void;
export function authProvidersInfo(store: any): Promise<{}>;
export function checkSchemasForFindAllHash(types: any, store: any): any;
export function checkPermissions(types: any, getters: any): any;
export function canViewResource(store: any, resource: any): boolean;
}

// @shell/utils/aws

declare module '@shell/utils/aws' {
}

// @shell/utils/axios

declare module '@shell/utils/axios' {
declare function _default(ctx: any, inject: any): void;
export default _default;
}

// @shell/utils/azure

declare module '@shell/utils/azure' {
export function parseAzureError(err: any): any;
}

// @shell/utils/banners

declare module '@shell/utils/banners' {
/**
 * Get the individual banner settings
 */
export function getIndividualBanners(store: any): {};
/**
 * Overlay settings from the individual banner settings onto the single banner setting
 */
export function overlayIndividualBanners(parsedBanner: any, banners: any): void;
/**
 * Get banner font sizes - used to add margins when header and footer banners are present
 **/
export function getGlobalBannerFontSizes(store: any): {
    headerFont: string;
    footerFont: string;
};
}

// @shell/utils/clipboard

declare module '@shell/utils/clipboard' {
export function copyTextToClipboard(text: any): Promise<void>;
}

// @shell/utils/cluster

declare module '@shell/utils/cluster' {
export function filterOnlyKubernetesClusters(mgmtClusters: any, store: any): any;
export function isHarvesterCluster(mgmtCluster: any): boolean;
export function isHarvesterSatisfiesVersion(version?: string): any;
export function filterHiddenLocalCluster(mgmtClusters: any, store: any): any;
/**
 * Shortens an input string based on the number of segments it contains.
 * @param {string} input - The input string to be shortened.
 * @returns {string} - The shortened string.
 * @example smallIdentifier('local') => 'lcl'
 * @example smallIdentifier('word-wide-web') => 'www'
 */
export function abbreviateClusterName(input: string): string;
export function labelForAddon(store: any, name: any, configuration?: boolean): any;
}

// @shell/utils/color

declare module '@shell/utils/color' {
export function createCssVars(color: any, theme?: string, name?: string): {
    [x: string]: any;
};
export function contrastColor(color: any, contrastOptions?: {
    dark: string;
    light: string;
}): string;
export function parseColor(str: any): any;
export function textColor(color: any): "black" | "white";
export function hexToRgb(hex: any): {
    r: number;
    g: number;
    b: number;
};
export function mapStandardColors(color: any): any;
export function rgbToRgb(rgb: any): {
    r: number;
    g: number;
    b: number;
};
export function colorToRgb(color: any): {
    r: number;
    g: number;
    b: number;
};
export function normalizeHex(hex: any): any;
}

// @shell/utils/computed

declare module '@shell/utils/computed' {
/**
 * Creates a computed property that handles converting strings to numbers and numbers to strings. Particularly when dealing with UnitInput.
 * @param {*} path The path of the real value
 * @returns the computed property
 */
export function integerString(path: any): {
    get(): number;
    set(value: any): void;
};
/**
 * Creates a computed property that handles converting strings a list of strings that look like ['key=value'] into { key: value } and back
 * @param {*} path The path of the real value
 * @param {*} delimiter the character/s used between the key/value. Default value '='.
 * @returns the computed property
 */
export function keyValueStrings(path: any, delimiter?: any): {
    get(): {};
    set(value: any): void;
};
}

// @shell/utils/config

declare module '@shell/utils/config' {
declare function _default(context: any, inject: any): void;
export default _default;
}

// @shell/utils/cookie-universal

declare module '@shell/utils/cookie-universal' {
declare function _default({ req, res }: {
    req: any;
    res: any;
}, inject: any): void;
export default _default;
}

// @shell/utils/create-yaml

declare module '@shell/utils/create-yaml' {
export function createYamlWithOptions(schemas: any, type: any, data: any, options: any): string;
export function createYaml(schemas: any, type: any, data: any, processAlwaysAdd?: boolean, depth?: number, path?: string, rootType?: any, dataOptions?: {}): string;
export function getBlockDescriptor(value: any, key: any): {
    header: string;
    indentation: string;
};
/**
 * Check for a specific type and if valid return it's sub type or self
 * @param {string} type required type
 * @param {string} str actual type
 * @param {ResourceField} field resourceField entry to the actual type
 *
 * @returns the sub type, or if not found the type
 */
export function typeRef(type: string, str: string, field?: ResourceField): any;
export function typeMunge(type: any): any;
export function saferDump(obj: any): any;
/**
 * Handles newlines indicators in the multiline blocks.
 *
 * this is required since jsyaml.dump doesn't support chomping and scalar style at the moment.
 * see: https://github.com/nodeca/js-yaml/issues/171

 * @typedef {Object} DumpBlockOptions
 * @property {('>' | '|')} [scalarStyle] - The scalar style.
 * @property {('-' | '+' | '' | null)} [chomping] - The chomping style.
 *
 * @param {*} data the multiline block
 * @param {Object} options - Serialization options for jsyaml.dump.
 * @param {number} options.lineWidth - Set max line width. Set -1 for unlimited width.
 * @param {DumpBlockOptions} [options.dynamicProperties] - Options for dynamic properties.
 *   Developers can provide their own property names under `options`.
 *
 * @returns the result of jsyaml.dump with the addition of multiline indicators
 */
export function dumpBlock(data: any, options?: {
    lineWidth: number;
    dynamicProperties?: DumpBlockOptions;
}): any;
export const SIMPLE_TYPES: string[];
export const NEVER_ADD: string[];
export const ACTIVELY_REMOVE: string[];
/**
 * Handles newlines indicators in the multiline blocks.
 *
 * this is required since jsyaml.dump doesn't support chomping and scalar style at the moment.
 * see: https://github.com/nodeca/js-yaml/issues/171
 */
export type DumpBlockOptions = {
    /**
     * - The scalar style.
     */
    scalarStyle?: ('>' | '|');
    /**
     * - The chomping style.
     */
    chomping?: ('-' | '+' | '' | null);
};
}

// @shell/utils/crypto/browserHashUtils

declare module '@shell/utils/crypto/browserHashUtils' {
export function hashObj(obj: any): string;
/**
 * @api private
 */
export function isEmptyData(data: any): boolean;
/**
 * @api private
 */
export function convertToBuffer(data: any): Uint8Array;
declare namespace _default {
    export { isEmptyData };
    export { convertToBuffer };
}
export default _default;
}

// @shell/utils/crypto/browserMd5

declare module '@shell/utils/crypto/browserMd5' {
/// <reference types="node" />
export default Md5;
/**
 * @api private
 */
declare function Md5(): void;
declare class Md5 {
    state: number[];
    buffer: DataView;
    bufferLength: number;
    bytesHashed: number;
    finished: boolean;
    update(sourceData: any): Md5;
    digest(encoding: any): string | Buffer;
    hashBuffer(): void;
}
declare namespace Md5 {
    export { BLOCK_SIZE };
}
import { Buffer } from "buffer";
declare const BLOCK_SIZE: 64;
}

// @shell/utils/crypto/browserSha1

declare module '@shell/utils/crypto/browserSha1' {
/// <reference types="node" />
export default Sha1;
/**
 * @api private
 */
declare function Sha1(): void;
declare class Sha1 {
    h0: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    block: Uint32Array;
    offset: number;
    shift: number;
    totalLength: number;
    update(data: any): Sha1;
    write(byte: any): void;
    digest(encoding: any): string | Buffer;
    processBlock(): void;
}
declare namespace Sha1 {
    export { BLOCK_SIZE };
}
import { Buffer } from "buffer";
declare const BLOCK_SIZE: 64;
}

// @shell/utils/crypto/browserSha256

declare module '@shell/utils/crypto/browserSha256' {
/// <reference types="node" />
export default Sha256;
/**
 * @private
 */
declare function Sha256(): void;
declare class Sha256 {
    state: number[];
    temp: Int32Array;
    buffer: Uint8Array;
    bufferLength: number;
    bytesHashed: number;
    /**
       * @private
       */
    private finished;
    update(data: any): Sha256;
    digest(encoding: any): string | Buffer;
    hashBuffer(): void;
}
declare namespace Sha256 {
    export { BLOCK_SIZE };
}
import { Buffer } from "buffer";
declare const BLOCK_SIZE: 64;
}

// @shell/utils/crypto

declare module '@shell/utils/crypto' {
/// <reference types="node" />
export function base64Encode(string: any, alphabet?: string): any;
export function base64DecodeToBuffer(string: any): any;
export function base64Decode(string: any): any;
export function md5(data: any, digest: any, callback: any): string | Buffer;
export function sha256(data: any, digest: any, callback: any): string | Buffer;
export function binarySize(val: any): number;
import { Buffer } from "buffer";
}

// @shell/utils/custom-validators

declare module '@shell/utils/custom-validators' {
declare namespace _default {
    export { clusterName };
    export { clusterIp };
    export { externalName };
    export { flowOutput };
    export { groupsAreValid };
    export { logdna };
    export { ruleGroups };
    export { interval };
    export { servicePort };
    export { matching };
    export { containerImages };
    export { cronSchedule };
    export { podAffinity };
    export { roleTemplateRules };
}
export default _default;
}

// @shell/utils/dom

declare module '@shell/utils/dom' {
export function getParent(el: any, parentSelector: any): any;
}

// @shell/utils/download

declare module '@shell/utils/download' {
export function downloadFile(fileName: any, content: any, contentType?: string): Promise<any>;
export function generateZip(files: any): any;
export function downloadUrl(url: any, id?: string): void;
}

// @shell/utils/dynamic-importer

declare module '@shell/utils/dynamic-importer' {
export function importCloudCredential(name: any): any;
export function importMachineConfig(name: any): any;
export function importLogin(name: any): any;
export function importChart(name: any): any;
export function importList(name: any): any;
export function importDetail(name: any): any;
export function importEdit(name: any): any;
export function importDialog(name: any): any;
export function importWindowComponent(name: any): any;
export function loadProduct(name: any): Promise<any>;
export function listProducts(): string[];
export function loadTranslation(name: any): Promise<any>;
export function importCustomPromptRemove(name: any): any;
export function resolveList(key: any): string;
export function resolveChart(key: any): string;
export function resolveEdit(key: any): string;
export function resolveDetail(key: any): string;
export function resolveWindowComponent(key: any): string;
export function resolveMachineConfigComponent(key: any): string;
export function resolveCloudCredentialComponent(key: any): string;
}

// @shell/utils/ember-page

declare module '@shell/utils/ember-page' {
export function findEmberPage(): HTMLElement;
export function clearEmberInactiveTimer(): void;
export function startEmberInactiveTimer(): void;
export function removeEmberPage(): void;
export const EMBER_FRAME: "ember-iframe";
}

// @shell/utils/error

declare module '@shell/utils/error' {
export function stringify(err: any): any;
export function exceptionToErrorsArray(err: any): any;
export class ClusterNotFoundError extends Error {
    static NAME: string;
    constructor(message: any);
}
/**
 * An error occurred and the user should be redirected to a certain location (where this is handled)
 */
export class RedirectToError extends Error {
    static NAME: string;
    constructor(message: any, url: any);
    url: any;
}
export class ApiError extends Error {
    constructor(res: any);
    status: any;
    statusText: any;
    headers: any;
    url: any;
    toJSON(): {
        type: string;
        status: any;
        statusText: any;
        message: any;
        url: any;
    };
}
export function normalizeError(err: any): any;
}

// @shell/utils/favicon

declare module '@shell/utils/favicon' {
export function haveSetFavIcon(): boolean;
export function setFavIcon(store: any): void;
}

// @shell/utils/formatter

declare module '@shell/utils/formatter' {
export function formatEncryptionSecretNames(secrets: any, chartNamespace: any): any;
}

// @shell/utils/grafana

declare module '@shell/utils/grafana' {
export function getClusterPrefix(monitoringVersion: any, clusterId: any): string;
export function computeDashboardUrl(monitoringVersion: any, embedUrl: any, clusterId: any, params: any, modifyPrefix?: boolean): any;
export function dashboardExists(monitoringVersion: any, store: any, clusterId: any, embedUrl: any, storeName?: string, projectId?: any): Promise<boolean>;
export function allDashboardsExist(store: any, clusterId: any, embeddedUrls: any, storeName?: string, projectId?: any): Promise<boolean>;
export function queryGrafana(monitoringVersion: any, dispatch: any, clusterId: any, query: any, range: any, step: any): any;
export function hasLeader(monitoringVersion: any, dispatch: any, clusterId: any): Promise<boolean>;
export function leaderChanges(monitoringVersion: any, dispatch: any, clusterId: any): Promise<any>;
export function failedProposals(monitoringVersion: any, dispatch: any, clusterId: any): Promise<any>;
}

// @shell/utils/kube

declare module '@shell/utils/kube' {
export function normalizeName(str: any): any;
}

// @shell/utils/monitoring

declare module '@shell/utils/monitoring' {
export function monitoringStatus(): {
    monitoringStatus(): {
        v2: boolean;
    };
};
export function haveV2Monitoring(getters: any): boolean;
export function canViewGrafanaLink(store: any): Promise<boolean>;
export function canViewAlertManagerLink(store: any): Promise<boolean>;
export function canViewPrometheusLink(store: any): Promise<boolean>;
export const CATTLE_MONITORING_NAMESPACE: "cattle-monitoring-system";
}

// @shell/utils/namespace-filter

declare module '@shell/utils/namespace-filter' {
export const NAMESPACE_FILTER_ALL_PREFIX: "all";
export const NAMESPACE_FILTER_NS_PREFIX: "ns";
export const NAMESPACE_FILTER_P_PREFIX: "project";
export const NAMESPACE_FILTER_NS_FULL_PREFIX: string;
export const NAMESPACE_FILTER_P_FULL_PREFIX: string;
export const NAMESPACE_FILTER_ALL: "all";
export const NAMESPACE_FILTER_ALL_SYSTEM: string;
export const NAMESPACE_FILTER_ALL_USER: string;
export const NAMESPACE_FILTER_ALL_ORPHANS: string;
export const NAMESPACE_FILTER_NAMESPACED_PREFIX: "namespaced://";
export const NAMESPACE_FILTER_NAMESPACED_YES: "namespaced://true";
export const NAMESPACE_FILTER_NAMESPACED_NO: "namespaced://false";
export namespace NAMESPACE_FILTER_KINDS {
    const DIVIDER: string;
    const PROJECT: string;
    const NAMESPACE: string;
    const SPECIAL: string;
}
export function createNamespaceFilterKey(clusterId: any, product: any): any;
export function createNamespaceFilterKeyWithId(clusterId: any, productId: any): string;
export function splitNamespaceFilterKey(key: any): {
    clusterId: any;
    productId: any;
};
}

// @shell/utils/object

declare module '@shell/utils/object' {
export function set(obj: any, path: any, value: any): any;
export function getAllValues(obj: any, path: any): any[];
export function get(obj: any, path: any): any;
export function remove(obj: any, path: any): any;
/**
 * `delete` a property at the given path.
 *
 * This is similar to `remove` but doesn't need any fancy kube obj path splitting
 * and doesn't use `Vue.set` (avoids reactivity)
 */
export function deleteProperty(obj: any, path: any): void;
export function getter(path: any): (obj: any) => any;
export function clone(obj: any): any;
export function isEmpty(obj: any): boolean;
/**
 * Checks to see if the object is a simple key value pair where all values are
 * just primitives.
 * @param {any} obj
 */
export function isSimpleKeyValue(obj: any): boolean;
export function cleanUp(obj: any): any;
export function definedKeys(obj: any): any;
export function diff(from: any, to: any): any;
export function changeset(from: any, to: any, parentPath?: any[]): {};
export function changesetConflicts(a: any, b: any): any[];
export function applyChangeset(obj: any, changeset: any): any;
/**
 * Creates an object composed of the `object` properties `predicate` returns
 */
export function pickBy(obj?: {}, predicate?: (value: any, key: any) => boolean): {};
export function dropKeys(obj: any, keys: any): void;
/**
 * Recursively convert a reactive object to a raw object
 * @param {*} obj
 * @param {*} cache
 * @returns
 */
export function deepToRaw(obj: any, cache?: any): any;
/**
 * Helper function to alter Lodash merge function default behaviour on merging arrays while updating machine pool configuration.
 *
 * In rke2.vue, the syncMachineConfigWithLatest function updates machine pool configuration by
 * merging the latest configuration received from the backend with the current configuration updated by the user.
 * However, Lodash's merge function treats arrays like object so index values are merged and not appended to arrays
 * resulting in undesired outcomes for us, Example:
 *
 * const lastSavedConfigFromBE = { a: ["test"] };
 * const currentConfigByUser = { a: [] };
 * merge(lastSavedConfigFromBE, currentConfigByUser); // returns { a: ["test"] }; but we expect { a: [] };
 *
 * More info: https://github.com/lodash/lodash/issues/1313
 *
 * This helper function addresses the issue by always replacing the old array with the new array during the merge process.
 *
 * This helper is used for another case in rke2.vue to handle merging addon chart default values with the user's current values.
 * It fixed https://github.com/rancher/dashboard/issues/12418
 */
export function mergeWithReplaceArrays(obj1?: {}, obj2?: {}): any;
export { isEqualBasic as isEqual };
export function toDictionary(array: any, callback: any): any;
/**
 * Super simple lodash isEqual equivalent.
 *
 * Only checks root properties for strict equality
 */
declare function isEqualBasic(from: any, to: any): boolean;
}

// @shell/utils/parse-externalid

declare module '@shell/utils/parse-externalid' {
export function parseExternalId(externalId: any): {
    kind: any;
    group: any;
    base: any;
    id: any;
    name: any;
    version: any;
};
export function parseHelmExternalId(externalId: any): {
    kind: any;
    group: any;
    base: any;
    id: any;
    name: any;
    version: any;
};
}

// @shell/utils/platform

declare module '@shell/utils/platform' {
export function isAlternate(event: any): boolean;
export function isMore(event: any): boolean;
export function isRange(event: any): boolean;
export function suppressContextMenu(event: any): boolean;
export function version(): number;
export const platform: string;
export const userAgent: string;
export const isLinuxy: boolean;
export const isMac: boolean;
export const isWin: boolean;
export const alternateKey: "metaKey" | "ctrlKey";
export const alternateLabel: "Command" | "Control";
export const moreKey: "metaKey" | "ctrlKey";
export const moreLabel: "Command" | "Control";
export const rangeKey: "shiftKey";
export const rangeLabel: "Shift";
export const isGecko: boolean;
export const isBlink: boolean;
export const isWebKit: boolean;
export const isSafari: boolean;
export const isMobile: boolean;
export namespace KEY {
    const LEFT: number;
    const UP: number;
    const RIGHT: number;
    const DOWN: number;
    const ESCAPE: number;
    const CR: number;
    const LF: number;
    const TAB: number;
    const SPACE: number;
    const PAGE_UP: number;
    const PAGE_DOWN: number;
    const HOME: number;
    const END: number;
}
}

// @shell/utils/poller-sequential

declare module '@shell/utils/poller-sequential' {
export default class PollerSequential {
    constructor(fn: any, pollRateMs: any, maxRetries?: number);
    fn: any;
    pollRateMs: any;
    maxRetries: number;
    timeoutId: any;
    tryCount: number;
    start(): void;
    stop(): void;
    _poll(): void;
    _intervalMethod(): Promise<void>;
}
}

// @shell/utils/poller

declare module '@shell/utils/poller' {
export default class Poller {
    constructor(fn: any, pollRateMs: any, maxRetries?: number);
    fn: any;
    pollRateMs: any;
    maxRetries: number;
    intervalId: any;
    tryCount: number;
    start(): void;
    stop(): void;
    _intervalMethod(): Promise<void>;
}
}

// @shell/utils/position

declare module '@shell/utils/position' {
export function boundingRect(elem: any): {
    top: any;
    right: any;
    bottom: any;
    left: any;
    width: any;
    height: any;
};
export function fakeRectFor(event: any): {
    top: any;
    left: any;
    bottom: any;
    right: any;
    width: number;
    height: number;
};
export function screenRect(): {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
};
export function fitOnScreen(contentElem: any, triggerElemOrEvent: any, opt: any, useDefaults: any): {
    position: string;
};
export const LEFT: "left";
export const RIGHT: "right";
export const TOP: "top";
export const CENTER: "center";
export const MIDDLE: "center";
export const BOTTOM: "bottom";
export const AUTO: "auto";
}

// @shell/utils/promise

declare module '@shell/utils/promise' {
export function allHash(hash: any): Promise<{}>;
export function allHashSettled(hash: any): Promise<{}>;
export function eachLimit(items: any, limit: any, iterator: any, debug?: boolean): Promise<any>;
export function deferred(name: any): {
    promise: Promise<any>;
};
/**
 * Apply the result of a promise to a given object's property
 *
 * This is a non-blocking method
 *
 * @param promise Promise to fetch result for
 * @param obj Object to set result of promise to
 * @param key Property in object to set result to
 * @param label Description of what promise is trying to  do
 */
export function setPromiseResult(promise: any, obj: any, key: any, label: any): void;
}

// @shell/utils/router

declare module '@shell/utils/router' {
export function queryParamsFor(current: any, qp: any, defaults?: {}): any;
export function getClusterFromRoute(to: any): any;
export function getProductFromRoute(to: any): any;
export function findMeta(route: any, key: any): any;
export function getPackageFromRoute(route: any): any;
export function getResourceFromRoute(to: any): any;
export function routeMatched(to: any, fn: any): boolean;
export function routeRequiresAuthentication(to: any): boolean;
export function routeRequiresInstallRedirect(to: any): boolean;
}

// @shell/utils/select

declare module '@shell/utils/select' {
export function onClickOption(option: any, e: any): void;
export function calculatePosition(dropdownList: any, component: any, width: any, placement: any): void;
}

// @shell/utils/selector

declare module '@shell/utils/selector' {
export function parse(labelSelector: any): any;
export function convertSelectorObj(obj: any): any;
export function convert(matchLabelsObj: any, matchExpressions: any): any;
export function simplify(matchExpressionsInput: any): {
    matchLabels: {};
    matchExpressions: any[];
};
export function matches(obj: any, selector: any, labelKey?: string): boolean;
export function matching(ary: any, selector: any, labelKey: any): any;
}

// @shell/utils/socket

declare module '@shell/utils/socket' {
export const addEventListener: any;
export const STATE_CONNECTING: "connecting";
export const STATE_CONNECTED: "connected";
export const EVENT_CONNECTING: "connecting";
export const EVENT_CONNECTED: "connected";
export const EVENT_DISCONNECTED: "disconnected";
export const EVENT_MESSAGE: "message";
export const EVENT_FRAME_TIMEOUT: "frame_timeout";
export const EVENT_CONNECT_ERROR: "connect_error";
export const EVENT_DISCONNECT_ERROR: "disconnect_error";
export const NO_WATCH: "NO_WATCH";
export const NO_SCHEMA: "NO_SCHEMA";
export const NO_PERMS: "NO_PERMS";
export const REVISION_TOO_OLD: "TOO_OLD";
declare const Socket_base: import("event-target-shim").EventTargetConstructor<{}, {}, "loose"> & {
    <TEvents extends EventTarget.EventDefinition = {}, TEventAttributes extends EventTarget.EventDefinition = {}, TMode extends EventTarget.Mode = "loose">(events: string[]): import("event-target-shim").EventTargetConstructor<TEvents, TEventAttributes, TMode>;
    <TEvents_1 extends EventTarget.EventDefinition = {}, TEventAttributes_1 extends EventTarget.EventDefinition = {}, TMode_1 extends EventTarget.Mode = "loose">(event0: string, ...events: string[]): import("event-target-shim").EventTargetConstructor<TEvents_1, TEventAttributes_1, TMode_1>;
    new <TEvents_2 extends EventTarget.EventDefinition, TEventAttributes_2 extends EventTarget.EventDefinition, TMode_2 extends EventTarget.Mode = "loose">(): EventTarget<TEvents_2, TEventAttributes_2, TMode_2>;
};
export default class Socket extends Socket_base {
    constructor(url: any, autoReconnect?: boolean, frameTimeout?: any, protocol?: any, maxTries?: any, idAsTimestamp?: boolean);
    url: any;
    autoReconnect: boolean;
    frameTimeout: number;
    metadata: {};
    hasBeenOpen: boolean;
    hasReconnected: boolean;
    protocol: any;
    maxTries: any;
    tries: number;
    idAsTimestamp: boolean;
    socket: any;
    state: string;
    framesReceived: number;
    frameTimer: any;
    reconnectTimer: any;
    disconnectCallBacks: any[];
    disconnectedAt: number;
    closingId: number;
    autoReconnectUrl: any;
    setUrl(url: any): void;
    connect(metadata?: {}): void;
    send(data: any): boolean;
    disconnect(callBack: any): Promise<any>;
    reconnect(metadata?: {}): void;
    getMetadata(): any;
    getId(): any;
    isConnected(): boolean;
    setAutoReconnect(autoReconnect: any): void;
    /**
     * Supply an async fn that will provide a new url to reconnect to
     */
    setAutoReconnectUrl(autoReconnectUrl: any): void;
    _close(): void;
    _opened(): void;
    _onmessage(event: any): void;
    _resetWatchdog(): void;
    _error(): void;
    _closed(event: any): void;
    /**
     * `console.log` the provided summary statement, with default information to identify the socket and the provided props
     */
    _log(summary: any, props: any): void;
    /**
     * `console.log` the provided summary statement and props
     *
     * This does not contain information to identify the socket and can be used in scenarios where it's not known or default
     */
    _baseLog(summary: any, props: any): void;
}
import { EventTarget } from "event-target-shim";
export {};
}

// @shell/utils/sort

declare module '@shell/utils/sort' {
/**
  Returns a consistent type for the passed object.

  Use this instead of the built-in `typeof` to get the type of an item.
  It will return the same result across all browsers and includes a bit
  more detail. Here is what will be returned:

      | Return Value  | Meaning                                              |
      |---------------|------------------------------------------------------|
      | 'string'      | String primitive or String object.                   |
      | 'number'      | Number primitive or Number object.                   |
      | 'boolean'     | Boolean primitive or Boolean object.                 |
      | 'null'        | Null value                                           |
      | 'undefined'   | Undefined value                                      |
      | 'function'    | A function                                           |
      | 'array'       | An instance of Array                                 |
      | 'regexp'      | An instance of RegExp                                |
      | 'date'        | An instance of Date                                  |
      | 'filelist'    | An instance of FileList                              |
      | 'error'       | An instance of the Error object                      |
      | 'object'      | A JavaScript object                                  |

  Examples:

  import { typeOf } from '@shell/utils/type-of';

  typeOf();                       // 'undefined'
  typeOf(null);                   // 'null'
  typeOf(undefined);              // 'undefined'
  typeOf('michael');              // 'string'
  typeOf(new String('michael'));  // 'string'
  typeOf(101);                    // 'number'
  typeOf(new Number(101));        // 'number'
  typeOf(true);                   // 'boolean'
  typeOf(new Boolean(true));      // 'boolean'
  typeOf(A);                      // 'function'
  typeOf([1, 2, 90]);             // 'array'
  typeOf(/abc/);                  // 'regexp'
  typeOf(new Date());             // 'date'
  typeOf(event.target.files);     // 'filelist'
  typeOf(new Error('teamocil'));  // 'error'

  // 'normal' JavaScript object
  typeOf({ a: 'b' });             // 'object'
*/
export function typeOf(item: any): any;
export function spaceship(a: any, b: any): number;
export function compare(a: any, b: any): any;
export function parseField(str: any): {
    field: any;
    reverse: boolean;
};
export function sortBy(ary: any, keys: any, desc: any): any;
export function sortableNumericSuffix(str: any): any;
export function isNumeric(num: any): boolean;
}

// @shell/utils/stream

declare module '@shell/utils/stream' {
export function streamJson(url: any, opt: any, onData: any): Promise<any>;
export function streamingSupported(): boolean;
}

// @shell/utils/string

declare module '@shell/utils/string' {
export function camelToTitle(str: any): any;
export function ucFirst(str: any): any;
export function lcFirst(str: any): any;
export function strPad(str: any, toLength: any, padChars?: string, right?: boolean): any;
export function sortableNumericSuffix(str: any): any;
export function escapeHtml(html: any): string;
/**
 * Return HTML markup from escaped HTML string, allowing specific tags
 * @param text string
 * @returns string
 */
export function decodeHtml(text: any): string;
export function escapeRegex(string: any): any;
export function random32(count: any): number | number[];
export function randomStr(length?: number, chars?: string): any;
export function formatPercent(value: any, maxPrecision?: number): string;
export function pluralize(str: any): any;
export function resourceNames(names: any, plusMore: any, t: any): any;
export function indent(lines: any, count?: number, token?: string, afterRegex?: any): any;
export function decamelize(str: any): any;
export function dasherize(str: any): any;
export function asciiLike(str: any): boolean;
export function coerceStringTypeToScalarType(val: any, type: any): any;
export function matchesSomeRegex(stringRaw: any, regexes?: any[]): boolean;
export function ensureRegex(strOrRegex: any, exact?: boolean): any;
export function nlToBr(value: any): string;
export function splitObjectPath(path: any): any;
export function joinObjectPath(ary: any): string;
export function shortenedImage(image: any): any;
export function isIpv4(ip: any): boolean;
export function sanitizeKey(k: any): any;
export function sanitizeValue(v: any): any;
export function sanitizeIP(v: any): any;
/**
 * Return the string `<x> / <y>`
 *
 * Each param should be a number, otherwise `?` is used
 */
export function xOfy(x: any, y: any): string;
export namespace CHARSET {
    export { num as NUMERIC };
    export const NO_VOWELS: string;
    export const ALPHA: string;
    export const ALPHA_NUM: string;
    export { alpha as ALPHA_LOWER };
    export const ALPHA_UPPER: string;
    export const HEX: string;
    export const PASSWORD: string;
}
declare const num: "0123456789";
declare const alpha: "abcdefghijklmnopqrstuvwxyz";
export {};
}

// @shell/utils/svg-filter

declare module '@shell/utils/svg-filter' {
export class Solver {
    constructor(rgb: any);
    target: Color;
    targetHSL: {
        h: number;
        s: number;
        l: number;
    };
    reusedColor: Color;
    solve(): {
        values: any;
        loss: number;
        filter: string;
    };
    solveWide(): {
        loss: number;
    };
    solveNarrow(wide: any): {
        values: any;
        loss: number;
    };
    spsa(A: any, a: any, c: any, values: any, iters: any): {
        values: any;
        loss: number;
    };
    loss(filters: any): number;
    css(filters: any): string;
}
declare class Color {
    constructor(r: any, g: any, b: any);
    toString(): string;
    set(r: any, g: any, b: any): void;
    r: any;
    g: any;
    b: any;
    hueRotate(angle?: number): void;
    grayscale(value?: number): void;
    sepia(value?: number): void;
    saturate(value?: number): void;
    multiply(matrix: any): void;
    brightness(value?: number): void;
    contrast(value?: number): void;
    linear(slope?: number, intercept?: number): void;
    invert(value?: number): void;
    hsl(): {
        h: number;
        s: number;
        l: number;
    };
    clamp(value: any): any;
}
export {};
}

// @shell/utils/time

declare module '@shell/utils/time' {
export function diffFrom(value: any, from: any, t: any): {
    diff: any;
    absDiff: number;
    label: string;
    unitsKey: string;
    units: string;
    next: number;
};
export function safeSetTimeout(timeout: any, callback: any, that: any): NodeJS.Timeout;
export function getSecondsDiff(startDate: any, endDate: any): number;
/**
 * return { diff: number; label: string }
 *
 * diff:  update frequency in seconds
 * label: content of the cell's column
 */
export function elapsedTime(seconds: any): {
    diff?: undefined;
    label?: undefined;
} | {
    diff: number;
    label: string;
};
}

// @shell/utils/units

declare module '@shell/utils/units' {
export function formatSi(inValue: any, { increment, addSuffix, addSuffixSpace, suffix, firstSuffix, startingExponent, minExponent, maxExponent, maxPrecision, canRoundToZero, }?: {
    increment?: number;
    addSuffix?: boolean;
    addSuffixSpace?: boolean;
    suffix?: string;
    firstSuffix?: any;
    startingExponent?: number;
    minExponent?: number;
    maxExponent?: number;
    maxPrecision?: number;
    canRoundToZero?: boolean;
}): any;
export function exponentNeeded(val: any, increment?: number): number;
export function parseSi(inValue: any, opt: any): number;
export function createMemoryFormat(n: any): {
    maxExponent: number;
    minExponent: number;
    addSuffix: boolean;
    firstSuffix: string;
    increment: number;
    maxPrecision: number;
    startingExponent: number;
    suffix: string;
};
export function createMemoryValues(total: any, useful: any): {
    total: number;
    useful: number;
    units: string;
};
export const UNITS: string[];
export const FRACTIONAL: string[];
export namespace MEMORY_PARSE_RULES {
    namespace memory {
        namespace format {
            const addSuffix: boolean;
            const firstSuffix: string;
            const increment: number;
            const maxExponent: number;
            const maxPrecision: number;
            const minExponent: number;
            const startingExponent: number;
            const suffix: string;
        }
    }
}
declare namespace _default {
    export { exponentNeeded };
    export { formatSi };
    export { parseSi };
}
export default _default;
}

// @shell/utils/validators/cidr

declare module '@shell/utils/validators/cidr' {
export function isValidCIDR(cidr: any): boolean;
export function isValidIP(ip: any): boolean;
export function isValidMac(value: any): boolean;
}

// @shell/utils/validators/cluster-name

declare module '@shell/utils/validators/cluster-name' {
export function clusterName(pathValue: any, getters: any, errors: any, validatorArgs: any, displayKey: any): any;
}

// @shell/utils/validators/container-images

declare module '@shell/utils/validators/container-images' {
export function containerImages(spec: any, getters: any, errors: any): void;
}

// @shell/utils/validators/cron-schedule

declare module '@shell/utils/validators/cron-schedule' {
export function cronSchedule(schedule: string, getters: any, errors: any): void;
}

// @shell/utils/validators/flow-output

declare module '@shell/utils/validators/flow-output' {
export function flowOutput(spec: any, getters: any, errors: any, validatorArgs: any): void;
}

// @shell/utils/validators

declare module '@shell/utils/validators' {
export function displayKeyFor(type: any, key: any, getters: any): any;
export function validateLength(val: any, field: any, displayKey: any, getters: any, errors?: any[]): any[];
export function validateChars(val: any, field: any, displayKey: any, getters: any, errors?: any[]): any[];
export function validateHostname(val: any, displayKey: any, getters: any, opts: any, errors?: any[]): any[];
export function validateDnsLabel(label: any, displayKey: any, getters: any, opts: any, errors?: any[]): any[];
export function validateDnsLikeTypes(val: any, type: any, displayKey: any, getters: any, opts: any, errors?: any[]): any[];
export function validateBoolean(val: any, field: any, displayKey: any, getters: any, errors?: any[]): void;
}

// @shell/utils/validators/kubernetes-name

declare module '@shell/utils/validators/kubernetes-name' {
export function validateKubernetesName(label: any, displayKey: any, getters: any, opts: any, errors?: any[]): any[];
}

// @shell/utils/validators/logging-outputs

declare module '@shell/utils/validators/logging-outputs' {
export function logdna(value: any, getters: any, errors: any, validatorArgs: any): void;
}

// @shell/utils/validators/monitoring-route

declare module '@shell/utils/validators/monitoring-route' {
export function matching(spec: any, getters: any, errors: any, validatorArgs: any): void;
export function interval(value: any, getters: any, errors: any, validatorArgs: any, displayKey: any): void;
}

// @shell/utils/validators/pod-affinity

declare module '@shell/utils/validators/pod-affinity' {
export function podAffinity(spec: any, getters: any, errors: any): void;
}

// @shell/utils/validators/prometheusrule

declare module '@shell/utils/validators/prometheusrule' {
export function ruleGroups(spec: any, getters: any, errors: any, validatorArgs: any): any;
export function groupsAreValid(groups: any[], getters: any, errors: any, validatorArgs: any): any;
}

// @shell/utils/validators/role-template

declare module '@shell/utils/validators/role-template' {
export function roleTemplateRules(rules: any[], getters: any, errors: any, validatorArgs?: any[]): void;
}

// @shell/utils/validators/service

declare module '@shell/utils/validators/service' {
export function servicePort(spec: any, getters: any, errors: any, validatorArgs: any): any;
export function clusterIp(spec: any, getters: any, errors: any, validatorArgs: any): any;
export function externalName(spec: any, getters: any, errors: any, validatorArgs: any): any;
}

// @shell/utils/validators/setting

declare module '@shell/utils/validators/setting' {
export function isServerUrl(value: any): boolean;
export function isHttps(value: any): any;
export function isLocalhost(value: any): boolean;
export function hasTrailingForwardSlash(value: any): any;
}

// @shell/utils/version

declare module '@shell/utils/version' {
export function parse(str: any): any;
export function sortable(str: any): any;
export function compare(in1: any, in2: any): any;
export function isPrerelease(version?: string): boolean;
export function isDevBuild(version: any): boolean;
export function getVersionInfo(store: any): {
    displayVersion: any;
    fullVersion: any;
};
export function seenReleaseNotes(store: any): boolean;
export function markSeenReleaseNotes(store: any): Promise<void>;
export function readReleaseNotes(store: any): boolean;
export function markReadReleaseNotes(store: any): Promise<void>;
}

// @shell/utils/width

declare module '@shell/utils/width' {
/**
 * Sets the width of a DOM element. Adapted from [youmightnotneedjquery.com](https://youmightnotneedjquery.com/#set_width)
 * @param {Element} el - The target DOM element
 * @param {function | string | number} val - The desired width represented as a Number
 */
export function setWidth(el: Element, val: Function | string | number): void;
/**
 * Gets the width of a DOM element. Adapted from [youmightnotneedjquery.com](https://youmightnotneedjquery.com/#get_width)
 * @param {Element} el - The target DOM element
 * @returns Number representing the width for the provided element
 */
export function getWidth(el: Element): number;
}

// @shell/utils/window

declare module '@shell/utils/window' {
export function popupWindowOptions(width: any, height: any): string;
export function open(url: any, name?: string, opt?: string): Window;
export class Popup {
    constructor(onOpen?: () => void, onClose?: () => void);
    onOpen: () => void;
    onClose: () => void;
    popup: Window;
    open(url: any, name: any, opt: any): void;
}
}
