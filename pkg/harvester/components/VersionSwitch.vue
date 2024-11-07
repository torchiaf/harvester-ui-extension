<script>
import { serverVersion } from '@pkg/harvester/utils/server';

export default {
  name: 'VersionSwitch',

  props: {
    component: {
      type:     String,
      required: true,
    }
  },

  data() {
    const version = serverVersion(this.$store.getters);

    let currentComponent = null;

    try {
      currentComponent = require(`./${ this.component }-${ version }.vue`).default;
    } catch {
      currentComponent = require(`./${ this.component }.vue`).default;
    }

    return { currentComponent };
  },

};
</script>

<template>
  <div>
    <component
      :is="currentComponent"
      v-bind="$attrs"
    />
  </div>
</template>
