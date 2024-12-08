import server from '../requset'

export const login = data => {
  return server({
    url: 'admin/user/login',
    method: 'post',
    data
  })
}
export const getUserInfo = () => {
  return server({
    url: 'admin/user/getUserInfo',
    method: 'get'
  })
}
export const token = () => {
  return server({
    url: 'admin/user/token',
    method: 'get'
  })
}
