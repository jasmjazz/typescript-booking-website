<template>
  <div class="login-page">
    <nav class="top-nav">
      <div class="logo" @click="router.push({ name: 'home' })">
        <img src="@/assets/img/logo.png" alt="" />
      </div>
    </nav>

    <div class="content-wrap">
      <div class="img-wrap">
        <img src="@/assets/img/register.png" alt="" />
      </div>
      <div class="form-wrap">
        <div class="form-inner">
          <div class="sub-title">享樂酒店，誠摯歡迎</div>
          <div class="form-title">立即開始旅程</div>

          <form class="form" action="">
            <template v-if="currentStep === 1">
              <n-form ref="formRef" :model="user" :rules="userRules">
                <n-form-item label="電子信箱" path="email">
                  <n-input
                    v-model:value="user.email"
                    type="text"
                    size="large"
                    maxlength="50"
                    clearable
                    placeholder="請輸入電子信箱"
                  />
                </n-form-item>
                <n-form-item label="密碼" path="password">
                  <n-input
                    v-model:value="user.password"
                    type="password"
                    size="large"
                    maxlength="50"
                    clearable
                    placeholder="請輸入密碼"
                  />
                </n-form-item>
              </n-form>
              <div style="margin-top: 20px; margin-bottom: 10px">
                <n-checkbox size="small" v-model:checked="remember" label="記住帳號" />
              </div>

              <button type="button" class="btn yellow" @click.prevent="login">會員登入</button>
            </template>

            <div class="has-account">
              沒有會員嗎？ <span @click="router.push({ name: 'register' })"> 立即註冊</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueCookies from 'vue-cookies'
import { useNotification, type FormInst } from 'naive-ui'
import { useRouter } from 'vue-router'
import { apiLogin } from '@/api/user/login'

const cookie: any = VueCookies
const notification = useNotification()
const router = useRouter()

type User = {
  email: string
  password: string
}

const currentStep = ref<number>(1)
const remember = ref<boolean>(false)

const user = ref<User>({
  email: '',
  password: ''
})

// 登入
function login() {
  formRef.value?.validate((errors) => {
    if (errors) {
      return
    }
    apiLogin(user.value).then((response: any) => {
      if (response.status === 200) {
        if (remember.value) {
          localStorage.setItem('remember', user.value.email)
        } else {
          localStorage.removeItem('remember')
        }
        notification.success({
          content: '成功',
          meta: '登入成功',
          duration: 2000
        })
        const token = response.data.token
        const userName = response.data.result.name
        cookie.set('TOKEN', token)
        cookie.set('USER_NAME', userName)
        router.push({ name: 'room' })
      }
    })
  })
}

// 欄位驗證
const formRef = ref<FormInst | null>(null)
const userRules = ref({
  email: { type: 'email', required: true, message: '格式不正確', trigger: ['input', 'blur'] },
  password: { required: true, message: '必填', trigger: ['input', 'blur'] }
})
</script>

<style lang="scss" scoped>
:deep(.n-form-item-label) {
  color: #fff;
}
:deep(.n-checkbox .n-checkbox__label) {
  color: #fff;
}
</style>
