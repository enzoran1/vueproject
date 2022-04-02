import Vue from 'vue'
import App from './App.vue'
// on ajoute le router
import router from './router';
// on ajoute le store
import store from "./store";

Vue.config.productionTip = false

new Vue({
  // on dit a l'instance de Vue d'utiliser notre router
  router,
  store,
  render: h => h(App),
}).$mount('#app')
