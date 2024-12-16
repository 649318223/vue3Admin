const getters = {
  userInfo: state => {
    console.log('getters', state)
    return state.user.userInfo
  }
}

export default getters
