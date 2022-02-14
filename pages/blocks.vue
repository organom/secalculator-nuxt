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
      <div>Total Blocks loaded: {{ this.baseBlocks.length }}</div>
      <vue-good-table
        :columns="columns"
        :rows="baseBlocks"
        :search-options="{ enabled: true }"
        :pagination-options="{
          enabled: true,
          perPage: 40,
          perPageDropdown: [10, 20, 40, 80, 120, 160, 200],
        }"
        styleClass="vgt-table striped"
        >
        <!--template slot="table-column" slot-scope="props">
           <span v-if="props.column.label === 'Components'">
              <i class="fa fa-address-book">{{props.column.label}}</i>
           </span>
           <span v-else>
              {{props.column.label}}
           </span>
        </template-->
        <div slot="emptystate">
          No data... please reload root of the website in order to have data!
        </div>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blocks',
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
          label: 'DisplayName',
          field: 'DisplayName',
        },
        {
          label: 'CubeSize',
          field: 'CubeSize',
        },
        {
          label: 'Type',
          field: 'Id.TypeId',
        },
        {
          label: 'Subtype',
          field: 'Id.SubtypeId',
        },
        {
          label: 'Description',
          field: 'ParsedDescription',
        },
        {
          label: 'PCU',
          field: 'PCU',
        },
        {
          label: 'BuildTimeSeconds',
          field: 'BuildTimeSeconds',
        },
        {
          label: 'RequiredPowerInput',
          field: 'RequiredPowerInput',
        },
        {
          label: 'Components',
          field: 'ParsedComponents',
        },
        {
          label: 'Components_original',
          field: 'Components',
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

