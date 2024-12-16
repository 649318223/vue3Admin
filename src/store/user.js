import { getUserInfo } from '@/api/login'
const state = {
  userInfo: {}
}

const mutations = {
  set_userInfo(state, data) {
    console.log(data)
    state.userInfo = {
      ...state.userInfo,
      ...data
    }
  }
}
const actions = {
  // 获取用户信息
  async getUserInfo({ commit }) {
    const res = await getUserInfo()
    if (res.status === 200) {
      commit('set_userInfo', res.data)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
