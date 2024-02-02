import req from '../http'

// 驗證信箱
export const apiVerifyEmail = (params: object) => {
  return req.post('/api/v1/verify/email', params)
}
