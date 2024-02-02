import { createDiscreteApi } from 'naive-ui'

const { notification } = createDiscreteApi(['notification'])

// 錯誤msg消息提示
export const tip = (msg: string) => {
  console.log('msg', msg)
  notification.error({
    content: '錯誤',
    meta: msg,
    duration: 3500
  })
}
