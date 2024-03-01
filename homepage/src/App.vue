<template>
  <Banner></Banner>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
  name: 'HomeView',
  components: {
    Banner
  }
}
</script>

<style scoped>
body{
  margin-left: 0px;
}
nav {
  background-color: hsl(225 75% 50%);
  display: flex;
  justify-content: space-around;
}
</style>
