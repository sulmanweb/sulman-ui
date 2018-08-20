<template>
  <div id="default-app">
    <nav-bar></nav-bar>
    <nuxt/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'

  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
  #default-app {
    font-family: 'Raleway', sans-serif;
  }
</style>

