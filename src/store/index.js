import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 一个对象 用来存储用户的信息'token'等数据
    user: getItem(TOKEN_KEY)
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY)) // 还原成对象
    // user:null
  },
  getters: {},
  // 永远通过mutations来修改用户数据
  mutations: {
    setUser(state, data) {
      state.user = data
      // 为了防止刷新丢失 需要把数据备份到本地
      setItem(TOKEN_KEY, state.user)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user)) // 把对象变成JSON格式的字符串
    }
  },
  actions: {},
  modules: {}
})
