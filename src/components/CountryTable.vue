<template>
  <a-table :columns="columns" :data-source="countries" rowKey="id" :pagination="false">
    <div slot="action" slot-scope="text, record">
      <a-popconfirm title="Are you sure?" ok-text="Yes" cancel-text="No" @confirm="onDeleteConfirm(record.id)">
        <span class="delete-link" type="delete" >{{'Delete'}}</span>
      </a-popconfirm>
    </div>
  </a-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Table , Icon, Popconfirm } from 'ant-design-vue';
import { countryServiceInstance } from '../CountryService/CountryService';
import { Country } from '../CountryService/model/country';

Vue.use(Table);
Vue.use(Icon);
Vue.use(Popconfirm);

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
  {
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
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
      return this.countryService.getCountries()
    }
  },
  methods: {
    onDeleteConfirm(id: string) {
      this.countryService.deleteCountry(id)
    }
  }
});
</script>

<style scoped lang="scss">
.delete-link{
  width: auto;
  color: #f55454;
  cursor: pointer;
}
</style>