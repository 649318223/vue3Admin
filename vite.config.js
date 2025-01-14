import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8001,
    proxy: {
      '^/admin': {
        target: 'http://localhost:3000/', //目标源，目标服务器，真实请求地址
        changeOrigin: true, //支持跨域
        rewrite: path => path.replace(/^\/api/, '/api') //重写真实路径,替换/api
      },
      '^/api': {
        target: 'http://47.108.51.28:3000', //目标源，目标服务器，真实请求地址
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, ''),
        logLevel: 'debug' // 添加日志输出
      }
    }
  }
})
