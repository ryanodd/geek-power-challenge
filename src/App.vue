<template>
  <div id="app">
    <CountryPage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CountryPage from './views/CountryPage.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CountryPage
  }
});
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
