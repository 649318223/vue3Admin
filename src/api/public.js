import server from './requset'

export const uploadApi = data => {
  return server({
    url: 'admin/upload',
    method: 'post',
    data,
    type: 'form'
  })
}
