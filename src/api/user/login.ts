import req from '../http'

// 登入
export const apiLogin = (params: object) => {
  return req.post('/api/v1/user/login', params)
}
