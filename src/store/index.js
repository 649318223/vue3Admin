import { createStore } from 'vuex'

import user from './user'
// 对外暴露store类的一个实例
export default createStore({
  // 局部模块
  modules: {
    user
  }
})
