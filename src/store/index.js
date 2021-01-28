import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bread:[]
  },
  mutations: {
    setBread(state,date){
      state.bread = date
    }
  },
  actions: {
  },
  modules: {
  }
})
