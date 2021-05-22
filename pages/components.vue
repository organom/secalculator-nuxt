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
    <section class="container">
      <div>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :search-options="{ enabled: true }">
          :pagination-options="{
          enabled: true,
          mode: 'records'
          }"
          styleClass="vgt-table striped"
          >
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
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: baseBlocks(),
    };
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

