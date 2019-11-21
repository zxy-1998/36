import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    num: 2
  },
  mutations: {
    add(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    }
  },
  actions: {

  },
  getters: {
    sum(state) {
      return state.num * state.count;
    }
  }
});
