<template>
  <div id="app">
    <router-view></router-view>
    <play></play>
  </div>
</template>

<script>
import play from '@/components/play.vue'
export default {
  name: 'app',
  components: {
    play
  }
}
</script>

<style>
@import "./assets/css/rem.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 7.5rem;
  min-height: 13rem;
  background-color: #f4f4f4;
}
</style>
