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
const sehelper = require('assets/se_helper');

export default {
  name: 'index',
  async asyncData({ $http, store }) {
    // Base Blocks
    if(store.state.base.blocks.length === 0 ) {
      store.commit('base/setBlocks', await sehelper.loadBaseBlocks());
    }
    return {}
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

