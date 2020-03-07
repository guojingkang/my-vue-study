import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue';


Vue.config.silent = true;

new Vue({
  render:h=>h(App)
}).$mount('#app')
