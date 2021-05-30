<template>
  <div>
    <div>
      <h1 class="title">
        secalculator
      </h1>
      <div class="links">
        <button class="button--grey" @click="goBack">Back</button>
      </div>
    </div>
    <div>
      <div>Total Records {{ this.baseBlocks.length }}</div>
      <vue-good-table
        :columns="columns"
        :rows="baseBlocks"
        :search-options="{ enabled: true }"
        styleClass="vgt-table striped"
        >
        <div slot="emptystate">
          Loading data, please wait!
        </div>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'components',
  async mounted() {
    if(this.$store.state.base.blocks.length === 0) {
      const blocks = await (require('/assets/load_base.js'))();
      this.$store.commit('base/setBlocks', blocks);
    }
  },
  computed: {
    baseBlocks () {
      return this.$store.state.base.blocks;
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  },
  data() {
    return {
      columns: [
        {
          label: 'CubeSize',
          field: 'CubeSize',
        },
        {
          label: 'BlockTopology',
          field: 'BlockTopology',
        },
        {
          label: 'DisplayName',
          field: 'DisplayName',
        },
        {
          label: 'Description',
          field: 'Description',
        },
        {
          label: 'RequiredPowerInput',
          field: 'RequiredPowerInput',
        },
        {
          label: 'Components',
          field: 'RequiredPowerInput',
        },
      ],
      rows: [],
      totalRecords: 0,
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

