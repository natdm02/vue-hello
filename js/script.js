
// const app = Vue.createApp({
//   data() {
//       return {
//           messaggio: 'Ciao Vue!'
//       };
//   }
// });

// app.mount('#app');

const { createApp } = Vue;

createApp ({
  data(){
    return{
      messaggio:'ciao Vue!',
    }
  }
}).mount('#app');