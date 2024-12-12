import axios from 'axios'
import { getToken, setToken } from '../utils/token.js'
import { ElMessage } from 'element-plus'
// 创建一个 Axios 实例
const server = axios.create({
  baseURL: '/', // 设置你的基础 URL
  timeout: 10000 // 设置请求超时时间
})

// 请求拦截器
server.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    if (config.type === 'form') {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
server.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    const { authorization } = response.headers
    if (authorization) {
      // 更新 token
      setToken(authorization)
    }
    const { data } = response
    return data
  },
  error => {
    // 对响应错误做些什么
    if (error.response && error.response.status === 401) {
      ElMessage.error('未授权，请先登录')
      // 处理未授权错误，例如重定向到登录页面
      setTimeout(() => {
        window.location.href = '/login'
      }, 1500)
    }
    return Promise.reject(error)
  }
)

export default server
