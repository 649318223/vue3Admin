import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './user'
import getters from './getters'
// 对外暴露store类的一个实例
export default createStore({
  // 局部模块
  modules: {
    user
  },
  getters,
  plugins: [
    createPersistedState({
      key: 'userInfo', // 存数据的key名   自定义的  要有语义化
      paths: ['user'] // 要把那些模块加入缓存
    })
  ]
})
