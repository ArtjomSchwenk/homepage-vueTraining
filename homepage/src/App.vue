<template>
  <div>
    <BannerSection></BannerSection>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import BannerSection from "@/components/Banner.vue";
export default {
  name: "HomeView",
  components: {
    BannerSection,
  },
};
</script>

<style>
body {
  margin: 0px;
}
nav {
  background-color: hsl(225 75% 50%);
  display: flex;
  justify-content: space-around;
}
</style>
