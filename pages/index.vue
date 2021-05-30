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
        <button class="button--grey" @click="goToComponents">Components</button>
        <button class="button--grey" @click="goToGitHub">GitHub</button>
      </div>

      <div>Total Records {{ this.baseBlocks.length }}</div>
      <div>{{ JSON.stringify(this.baseBlocks) }}</div>
    </div>
  </section>
</template>

<script>
const fastParser = require('fast-xml-parser');

export default {
  name: 'index',
  async asyncData({ $http, store }) {
    // Base Blocks
    if(store.state.base.blocks.length === 0 ) {
      const files = ["CubeBlocks", "CubeBlocks_Armor", "CubeBlocks_Armor_2", "CubeBlocks_Automation", "CubeBlocks_Communications", "CubeBlocks_Control", "CubeBlocks_DecorativePack",
        "CubeBlocks_DecorativePack2", "CubeBlocks_Doors", "CubeBlocks_Economy", "CubeBlocks_Energy", "CubeBlocks_Extras", "CubeBlocks_Frostbite", "CubeBlocks_Gravity", "CubeBlocks_Interiors",
        "CubeBlocks_LCDPanels", "CubeBlocks_Lights", "CubeBlocks_Logistics", "CubeBlocks_Mechanical", "CubeBlocks_Medical", "CubeBlocks_Production", "CubeBlocks_ScrapRacePack", "CubeBlocks_SparksOfTheFuturePack",
        "CubeBlocks_Symbols", "CubeBlocks_Thrusters", "CubeBlocks_Tools", "CubeBlocks_Utility", "CubeBlocks_Warfare1", "CubeBlocks_Weapons", "CubeBlocks_Wheels", "CubeBlocks_Windows"]

      const blocks = [];
      for (let i = 0; i < files.length; i++) {
        const response = await $http.$get(`https://organom.github.io/secalculator/CubeBlocks/${files[i]}.sbc`)
        const jsonObj = await fastParser.parse(response, {
          attributeNamePrefix: "@_",
          ignoreAttributes: false,
          ignoreNameSpace: false
        });
        if (jsonObj.Definitions) {
          blocks.push(jsonObj.Definitions.CubeBlocks.Definition);
        }
      }
      const flatten = blocks.flat();
      store.commit('base/setBlocks', flatten);
      return {}
    }
  },
  computed: {
    baseBlocks () {
      return this.$store.state.base.blocks;
    }
  },
  methods: {
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

