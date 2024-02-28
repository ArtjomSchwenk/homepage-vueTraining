const app = Vue.createApp({
  template: `
  <header> 
    <h1>Welcome to {{ name }}'s homepage!</h1>
    <p>🚧This is my test site for learning vuejs und php🚧</p>
    <img :src="banner">
  </header>
  `,
  data() {
    return {
      name: 'Artjom',
      banner: 'img/postcards.jpeg'
    }
  }
});

app.mount('#app');
