import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './routes';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
