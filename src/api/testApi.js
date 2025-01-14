import server from './requset'
export const infoApi = () => {
  return server({
    url: 'api/user/info',
    method: 'get'
  })
}