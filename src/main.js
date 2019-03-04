// External Libraries
import Vue from 'vue';
import axios from 'axios';
import VeeValidate from 'vee-validate';

// App Import
import App from './App.vue';
import router from './routes';
import store from './store';
import './registerServiceWorker';

// Styles
import './assets/scss/style.scss';

Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$appName = 'Vonvick Music';
Vue.prototype.$api = process.env.VUE_APP_API_URL;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
