<template>
  <a-table :columns="columns" :data-source="countries" rowKey="id" bordered :pagination="false">
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
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Country Code',
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
</style>