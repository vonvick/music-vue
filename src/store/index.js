import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {},
  mutations: {},
  plugins: [createPersistedState()],
  modules: {
    user,
  },
  actions: {},
  strict: debug,
});
