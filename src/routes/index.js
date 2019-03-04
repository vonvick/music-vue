import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

function loadView(view) {
  return () => import(`../views/${view}.vue`);
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About'),
    },
    {
      path: '/register',
      name: 'signup',
      component: loadView('SignUpView'),
    },
    {
      path: '/login',
      name: 'signin',
      component: loadView('SignInView'),
    },
  ],
});
