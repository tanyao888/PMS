import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
import menuList from './menuList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userInfo,
    menuList
  }
})
