import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './theme/index.scss'
import router from './router'

import store from './store'
import locale from 'element-plus/es/locale/lang/zh-cn'
// store.dispatch('user/getUserInfo') // 获取用户信息
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { locale })
app.mount('#app')
