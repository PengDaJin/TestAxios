import axios from 'axios'

// axios的模块封装
// 第四种方式
export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    // 2.1请求拦截 的作用
    //  1.比如config中的一些信息不符合服务器的要求
    //  2.比如每次发送网路请求时，都希望在界面中显示一个请求的图表
    //  3.某些网络请求（比如登录token），必须携带一下特殊的消息
    return config // 拦截之后返回回去
  }, err => {
    console.log(err)
  })
  // 2.2响应拦截
  instance.interceptors.request.use(res => {
    // console.log(res.data)
    return res
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance(config) // => Promise
}
// 第三种方式
// export function request (config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 第二种方式
// export function request (config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config.baseConfig)
//       .then(res => {
//         config.success(res)
//       })
//       .catch(err => {
//         config.failure(err)
//       })
//   })
// }

// 第一种方式
// export function request (config, success, failure) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         success(res)
//       })
//       .catch(err => {
//         failure(err)
//       })
//   })
// }
