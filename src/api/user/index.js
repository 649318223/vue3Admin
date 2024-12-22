import server from '../requset'

export const updateApi = data => {
  return server({
    url: 'admin/user/update',
    method: 'post',
    data,
    type: 'form'
  })
}
//添加用户
export const addUserApi = data => {
  return server({
    url: 'admin/user/addUser',
    method: 'post',
    data
  })
}
//获取用户列表
export const getListApi = data => {
  return server({
    url: 'admin/user/getList',
    method: 'post',
    data
  })
}
