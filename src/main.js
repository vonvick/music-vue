import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './routes';
import store from './store';
import './registerServiceWorker';

// Styles
import './assets/scss/style.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$appName = 'Vonvick Music';
Vue.prototype.$api = process.env.VUE_APP_API_URL;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
