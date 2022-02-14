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
    <h2>&nbsp;</h2>
    <div>
      <div>Total Components loaded: {{ this.baseComponents.length }}</div>
      <vue-good-table
        :columns="columns"
        :rows="baseComponents"
        :search-options="{ enabled: true }"
        :pagination-options="{
          enabled: true,
          perPage: 40,
          perPageDropdown: [10, 20, 40, 80, 120, 160, 200],
        }"
        styleClass="vgt-table striped"
        >
        <div slot="emptystate">
          No data... please reload root of the website in order to have data!
        </div>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'components',
  computed: {
    baseComponents () {
      return this.$store.state.base.components;
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
          label: 'Code',
          field: 'Code',
        },
        {
          label: 'DisplayName',
          field: 'DisplayName',
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

