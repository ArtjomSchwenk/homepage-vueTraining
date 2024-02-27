const app = Vue.createApp({
  template: `
  <header>
    <h1>Welcome to {{ name }} homepage!</h1>
    <p>🚧This is my test site for learning vuejs und php🚧</p>
  </header>
  `,
  data() {
    return {
      name: 'Artjom'
    }
  }
});

app.mount('#app');
