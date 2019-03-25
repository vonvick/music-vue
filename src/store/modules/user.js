/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  description: '',
  avatar: '',
  roleId: '',
  headline: '',
  accessToken: '',
  clientToken: '',
  expiry: '',
};

const state = {
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  description: '',
  avatar: '',
  roleId: '',
  headline: '',
  accessToken: '',
  clientToken: '',
  expiry: '',
};

const getters = {
  getUserDetailsData: state => stateKey => state[stateKey],
};

const actions = {
  updateUserDetailsData: ({ commit }, payload) => commit('setUserDetailsData', payload),
  clearUserDetailsData: ({ commit }, payload) => commit('resetUserDetailsData', payload),
};

const mutations = {
  setUserDetailsData: (state, payload) => {
    Object.keys(payload).forEach((item) => {
      state[item] = payload[item];
    });
  },
  resetUserDetailsData: (state, payload) => {
    Object.keys(payload).forEach((item) => {
      state[item] = initialState[item];
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
