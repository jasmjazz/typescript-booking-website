import req from '../http'

// 驗證信箱
export const apiVerifyEmail = (params: object) => {
  return req.post('/api/v1/verify/email', params)
}

// 註冊
export const apiSignUp = (params: object) => {
  return req.post('/api/v1/user/signup', params)
}
