<template>
  <div id="app">

    <nav>
      <router-link to="/">Home</router-link>
    </nav>

    <router-view />
  </div>
</template>


<script lang="ts">
export default {
  name: 'App',
  components: {
  }
}
</script>
