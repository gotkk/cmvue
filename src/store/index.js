import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: "tt"
  },
  mutations: {
    setTest(state,test) {
      state.test = test
    }
  },
  actions: {
  },
  modules: {
    user
  },
  getters: {
    test: state => state.test
  }
})
