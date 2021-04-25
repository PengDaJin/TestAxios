import Vue from 'vue'
import TodoList from './TodoList'

// import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoList },
  template: '<TodoList />'
})

// 3.axios的模块封装
// 第四种方式
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 第一种方式
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// 第二种方式
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function (res) {
//     console.log(res)
//   },
//   failure: function (err) {
//     console.log(err)
//   }
// })

// 第三种方式
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// // 1.axios 基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get' // 默认get
// }).then(r => {
//   console.log(r)
// })
// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell$page=3',
//   params: {
//     type: '',
//     page: 1
//   }
// }).then(r => {
//   console.log(r)
// })
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'dKeyword',
//     page: 1
//   }
// }).then(r => {
//   console.log(r)
// })

// // 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   params: {
//     type: 'sell',
//     page: '5'
//   }
// })]).then(r => { // or (axios.spread((r1, r2)) => {})
//   console.log(r)
// })
