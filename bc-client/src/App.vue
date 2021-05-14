<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }

</script>

<style>
  body {
    margin: 0px;
    padding: 0px;
    font-family: Airbnb Cereal App, sans-serif;
    text-align: center;
    background: #191919;
  }
</style>
