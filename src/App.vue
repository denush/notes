<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './css/reset.css';

  export default {
    name: 'app'
  }
</script>

<style>
  .wrapper {
    /*border: 1px solid #444;*/
    margin: auto;
    width: 800px;
  }
</style>
