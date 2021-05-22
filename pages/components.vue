<template>
  <div>
    <div>
      <h1 class="title">
        secalculator
      </h1>
      <div class="links">
        <a href="/secalculator/"
           class="button--green">Index</a>
      </div>
    </div>
    <template v-if="loading">
      <spinner></spinner> <!-- here use a loaded you prefer -->
    </template>
    <section class="container">
      <div>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :search-options="{ enabled: true }"
          styleClass="vgt-table striped"
          >
          <div slot="emptystate">
            Loading data, please wait!
          </div>
        </vue-good-table>
      </div>
    </section>
  </div>
</template>

<script>
const baseBlocks = require('/assets/load_base.js');

export default {
  components: {
  },
  name: 'index',
  data(){
    return {
      loading: false,
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
          type: 'number'
        },
      ],
      rows: [],
    };
  },
  created() {
    this.getBaseBlocks()
  },
  methods: {
    getBaseBlocks() {
      this.loading = true
      baseBlocks()
        .then(response => {
          this.loading = false
          this.rows = response;
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    }
  }
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

