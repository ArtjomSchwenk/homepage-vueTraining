<template>
  <div class="banner"> 
    <img :src="image">
    <div class="bannerText">
      <h1>Welcome to {{ myName }}'s homepage!</h1>
      <p>🚧This is my test site for learning vuejs und php🚧</p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return{
      myName: 'Artjom',
      image: require('@/assets/sunflowers.jpeg')
    };
  },
};
</script>

<style>
body {
  margin: 0px;  
}
.banner {
  position: relative;
  text-align: center;
}
img {
  height: 15rem;
  width: 100%;
  object-fit: cover;
  filter: blur(2px);
  filter: contrast(40%);
}
.bannerText {
  color: white;
  text-shadow: 0px 0px 8px #000000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
</style>

