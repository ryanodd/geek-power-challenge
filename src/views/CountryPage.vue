<template>
  <div class="country-page">
    <a-button type="primary" v-on:click="clickedFetch()">
      Fetch Countries
    </a-button>
    <CountryTable/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CountryTable from '../components/CountryTable.vue';
import { Button } from 'ant-design-vue';
import { countryServiceInstance } from '../country/CountryService';

Vue.use(Button);

export default Vue.extend({
  name: 'CountryPage',
  components: {
    CountryTable
  },
  data: function() {
    return {
      countryService: countryServiceInstance
    };
  },
  methods: {
    clickedFetch() {
      this.countryService.fetchCountries()
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.country-page{
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px 80px;
}
</style>