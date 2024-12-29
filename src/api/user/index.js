import server from '../requset'

export const updataUserApi = data => {
  return server({
    url: 'admin/user/updataUser',
    method: 'post',
    data
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
//删除用户
export const delUserApi = params => {
  return server({
    url: 'admin/user/delUser',
    method: 'get',
    params
  })
}
