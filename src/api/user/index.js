import server from '../requset'

export const updateApi = data => {
  return server({
    url: 'admin/user/update',
    method: 'post',
    data,
    type: 'form'
  })
}
