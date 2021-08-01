<template>
  <section class="container">
    <div>
      <h1 class="title">
        secalculator
      </h1>
      <h2 class="subtitle">
        Space Engineers calculator
      </h2>
      <div class="links">
        <button class="button--grey" @click="goToBlocks">Blocks</button>
        <button class="button--grey" @click="goToComponents">Components</button>
        <button class="button--grey" @click="goToGitHub">GitHub</button>
      </div>
      <h2>&nbsp;</h2>
      <div>Total Blocks loaded: {{ this.baseBlocks.length }}</div>
      <div>Total Components loaded: {{ this.baseComponents.length }}</div>
    </div>
  </section>
</template>

<script>
const sehelper = require('assets/se_helper');

export default {
  name: 'index',
  async asyncData({ $http, store }) {
    // Base Blocks
    if(store.state.base.blocks.length === 0 ) {
      const blocks = await sehelper.loadBaseBlocks();
      const components = blocks.map(x => x.Components.Component).flat();
      const uniqueComponents = [...new Set(components.map(t => t['@_Subtype']))];
      store.commit('base/setComponents', uniqueComponents.map(t => {
        return {
          Code: t,
          DisplayName: t.replace(/([A-Z])/g, " $1")
        };
      }));

      for (let i = 0; i < blocks.length; i++) {
        const comps = {};
        if(Array.isArray(blocks[i].Components.Component)) {
          for (let t = 0; t < blocks[i].Components.Component.length; t++) {
            const key = blocks[i].Components.Component[t]['@_Subtype'];
            const value = blocks[i].Components.Component[t]['@_Count'];
            comps[key] = +(comps[key] || 0) + +value;
          }
        } else {
          const key = blocks[i].Components.Component['@_Subtype'];
          const value = blocks[i].Components.Component['@_Count'];
          comps[key] = +value;
        }
        blocks[i].ParsedComponents = comps;
        blocks[i].ParsedDescription = blocks[i].Description?.replace('Description_', '');
      }
      store.commit('base/setBlocks', blocks);
    }

    return {}
  },
  computed: {
    baseBlocks () {
      return this.$store.state.base.blocks;
    },
    baseComponents () {
      return this.$store.state.base.components;
    }
  },
  methods: {
    goToBlocks() {
      return this.$router.push('/blocks')
    },
    goToComponents() {
      return this.$router.push('/components')
    },
    goToGitHub() {
      return window.location = 'https://github.com/organom/secalculator';
    }
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

