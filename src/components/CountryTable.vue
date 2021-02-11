<template>
  <a-table class="country-table" :columns="columns" :data-source="countries" rowKey="id">
  </a-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Table } from 'ant-design-vue';
import { countryServiceInstance } from '../country/CountryService';
import { Country } from '../country/model/country';

Vue.use(Table);

const columns = [
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Country Code',
    key: 'countryCode',
    dataIndex: 'countryCode',
  },
];

export default Vue.extend({
  name: 'CountryTable',
  props: {
  },
  data: function() {
    return {
      countryService: countryServiceInstance,
      columns,
    };
  },
  computed: {
    countries(): Country[] {
      return this.countryService.countries
      
    }
  }
});
</script>

<style scoped lang="scss">
.country-table {
}
</style>