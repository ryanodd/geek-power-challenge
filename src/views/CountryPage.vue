<template>
  <div class="country-page">
    <div class="title">
      {{"Countries"}}
    </div>
    <div class="subtitle">
      {{`Try clicking Fetch to see which countries the "server" contains today.`}}
    </div>
    <div class="table-section">
      <div class="fetch-section">
        <a-button class="fetch-button" type="primary" size="large" v-on:click="clickedFetch()">
          {{"Fetch"}}
        </a-button>
        <a-spin v-if="showFetchingSpinner" class="fetch-spinner"/>
        <div v-if="fetchMessage" class="fetch-message">
          {{this.fetchMessage}}
        </div>
      </div>
      <CountryTable/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CountryTable from '../components/CountryTable.vue';
import { Button, Spin } from 'ant-design-vue';
import { countryServiceInstance } from '../CountryService/CountryService';

Vue.use(Button);
Vue.use(Spin);

export default Vue.extend({
  name: 'CountryPage',
  components: {
    CountryTable
  },
  data: function() {
    return {
      showFetchingSpinner: false,
      fetchMessage: "",
      countryService: countryServiceInstance
    };
  },
  methods: {
    clickedFetch() {
      this.showFetchingSpinner = true;
      this.fetchMessage = "fetching... (trust me)";
      this.countryService.fetchCountries()
      .then(message => {
        this.fetchMessage = message
        this.showFetchingSpinner = false;
      })
      .catch(message => {
        this.fetchMessage = message
        this.showFetchingSpinner = false;
      })
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.country-page{
  width: 100%;
  height: 100%;
  padding: 20px 80px;
  
  background-color: rgb(236, 236, 236);
}
.title{
  color: #575757;
  font-weight: 300;
  font-size: 60px;
}
.subtitle {
  color: #575757;
  font-weight: 300;
  font-size: 24px;
}
.table-section{
  width: 100%;
  margin-top: 20px;

  background-color: white;
  padding: 0px 15px 15px 15px;
  border-radius: 4px; 
}
.fetch-section{
  display: flex;
  align-items: center;
  padding: 15px 0px;
}
.fetch-button{
  margin-right: 10px;
}
.fetch-spinner{
  margin-right: 10px;
}
.fetch-message{
  color: #575757;
  font-weight: 300;
}
</style>