import axios from 'axios'

export const baseURL = 'http://127.0.0.1:3006/'
const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(res => {
  return res.data.result
  // const { reason, result } = res.data
  // // error_code ===0 请求成功
  // if (reason === 'success') {
  //   return result
  // } else {
  //   // 请求错误将原因提示出来
  //   return Promise.reject(new Error('请求失败'))
  // }
})

// 请求工具函数
export default (url, method, submintData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submintData
  })
}
