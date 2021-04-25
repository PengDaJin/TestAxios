import Vue from 'vue'
import Vuex from 'Vuex'
import {UPDATEINFO, DECREMENT, UPDATEINFOX} from './mutations-types'

import {moduleA, moduleB} from './account'

// 1.安装Vuex插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: { // 共享状态
    count: 10,
    info: {
      name: 'php',
      age: 21
    }
  },
  mutations: { // 方法
    increment (state) {
      state.count++
    },
    [DECREMENT] (state, payload) {
      state.count = payload.count
    },
    [UPDATEINFO] (state) { // [xxx] 官方推荐的类型常量
      // state响应式 set(要修改的对象,索引值,修改后的值)
      Vue.set(state.info, 'namex', 'LA')
      // Vue.delete(state.info, 'age)
    },
    [UPDATEINFOX] (state) { // [xxx] 官方推荐的类型常量
      // state响应式 set(要修改的对象,索引值,修改后的值)
      Vue.set(state.info, 'nameLA', 'XXXXXXXXXXXXX')
      // Vue.delete(state.info, 'age)
    }
  },
  actions: { // 异步操作
    // context上下文
    aUpdataInfo (context, payload) {
      setTimeout(() => {
        context.commit(UPDATEINFO)
        console.log(payload.message)
        payload.success()
      }, 1000)
    },
    // 优雅的写法
    aUpdataInfoS (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFOX)
          console.log(payload)
          resolve('耶耶耶')
        }, 1000)
      })
    }
  },
  getters: { // 计算属性

  },
  modules: { // 模块
    a: moduleA,
    b: moduleB
  }
})

// 3.导出store独享
export default store
