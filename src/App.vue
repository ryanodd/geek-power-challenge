<template>
  <div id="app" class="app">
    <div class="app-column">
      <CountryPage />
    </div>
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
// GLOBAL STYLING
#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>
.app{
  // Takes up whole viewport
  width: 100%;
  height: 100vh;


  display: flex;
  justify-content: center;
  background-color: #2c3e50;

}
.app-column{
  // is as wide as possible before max-width
  flex-grow: 1;
  max-width: 1000px;
  height: 100%;


}
</style>
