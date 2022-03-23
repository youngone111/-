import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsCollapse: false
  },
  getters: {},
  mutations: {
    changeMenuCollapse(state, data) {
      state.menuIsCollapse = !state.menuIsCollapse;
    }
  },
  actions: {},
  modules: {}
});
