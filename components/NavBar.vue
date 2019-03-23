<template>
  <section id="NavBar">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Sulman Baig</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://medium.com/@sulmanweb" target="_blank" rel="nofollow">Blog</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              Profile
            </template>
            <b-dropdown-item href="/education">Education</b-dropdown-item>
            <b-dropdown-item href="/experiences">Experiences</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!-- navbar-1.vue -->
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
