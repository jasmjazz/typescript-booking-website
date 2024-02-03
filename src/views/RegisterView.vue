<template>
  <div class="register-page">
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
          <div class="form-title">立即註冊</div>
          <div class="steps">
            <div class="step fill">
              <div class="status">
                <template v-if="currentStep === 1">1</template>
                <template v-else>✓</template>
              </div>
              <div class="text">輸入信箱及密碼</div>
            </div>
            <div class="line"></div>
            <div class="step" :class="{ fill: currentStep === 2 }">
              <div class="status">2</div>
              <div class="text">填寫基本資料</div>
            </div>
          </div>

          <form class="form" action="">
            <template v-if="currentStep === 1">
              <n-form ref="formRef" :model="user" :rules="userRules">
                <n-form-item label="電子信箱" path="email">
                  <n-input
                    v-model:value="user.email"
                    size="large"
                    maxlength="50"
                    clearable
                    placeholder="請輸入信箱"
                  />
                </n-form-item>
                <template v-if="verifyStatus">
                  <n-form-item label="密碼" path="password">
                    <n-input
                      v-model:value="user.password"
                      type="password"
                      size="large"
                      maxlength="20"
                      clearable
                      placeholder="請輸入密碼"
                    />
                  </n-form-item>
                  <n-form-item label="確認密碼" path="confirm">
                    <n-input
                      v-model:value="user.confirm"
                      type="password"
                      size="large"
                      maxlength="20"
                      clearable
                      placeholder="請再次輸入密碼"
                    />
                  </n-form-item>
                </template>
              </n-form>
              <button
                v-if="!verifyStatus"
                type="button"
                class="btn yellow"
                style="margin-top: 20px"
                @click.prevent="verifyEmail"
              >
                驗證
              </button>
              <button
                v-else
                type="button"
                class="btn gray"
                style="margin-top: 20px"
                @click.prevent="nextStep"
              >
                下一步
              </button>
            </template>

            <template v-if="currentStep === 2">
              <n-form ref="formRef" :model="user" :rules="userRules">
                <n-form-item label="姓名" path="name">
                  <n-input
                    v-model:value="user.name"
                    type="text"
                    size="large"
                    maxlength="50"
                    clearable
                    placeholder="請輸入姓名"
                  />
                </n-form-item>
                <n-form-item label="手機號碼" path="phone">
                  <n-input
                    v-model:value="user.phone"
                    type="text"
                    size="large"
                    maxlength="10"
                    clearable
                    placeholder="請輸入手機號碼"
                  />
                </n-form-item>
                <n-form-item label="生日" path="birthday">
                  <n-date-picker
                    v-model:formatted-value="user.birthday"
                    :is-date-disabled="disablePreviousDate"
                    style="width: 100%"
                    type="date"
                    size="large"
                    clearable
                    placeholder="請選擇日期"
                  />
                </n-form-item>
                <n-form-item label="縣市／區" path="zipcode">
                  <n-tree-select
                    v-model:value="user.zipcode"
                    :show-path="true"
                    :options="districtOptions"
                    label-field="name"
                    key-field="guid"
                    check-strategy="child"
                    size="large"
                    filterable
                    clearable
                  />
                </n-form-item>

                <n-form-item label="地址" path="detail">
                  <n-input
                    v-model:value="user.detail"
                    type="text"
                    size="large"
                    maxlength="200"
                    clearable
                    placeholder="請輸入地址"
                  />
                </n-form-item>

                <n-form-item path="agree">
                  <n-checkbox v-model:checked="user.agree"> 我已閱讀並同意本站使用規範 </n-checkbox>
                </n-form-item>
              </n-form>

              <button type="button" class="btn yellow" @click.prevent="signIn">完成註冊</button>
            </template>

            <div class="has-account">
              已經有會員了嗎？ <span @click="loginPage"> 立即登入</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNotification, type FormInst, type FormItemRule } from 'naive-ui'
import { useRouter } from 'vue-router'
import { apiVerifyEmail, apiSignUp } from '@/api/user/register'
import districtData from '@/assets/data/taiwan_districts.json'

const notification = useNotification()
const router = useRouter()

type User = {
  email: string
  password: string
  confirm: string
  name: string
  phone: string
  birthday: string | null
  zipcode: string | null
  detail: string
  agree: boolean
}

type District = {
  guid: string
  name: string
  children: {
    guid: number
    name: string
  }[]
}

const currentStep = ref<number>(1)
const verifyStatus = ref<boolean>(false)
let districtOptions: District[] = []

const user = ref<User>({
  email: '',
  password: '',
  confirm: '',
  name: '',
  phone: '',
  birthday: null,
  zipcode: null,
  detail: '',
  agree: false
})

// 驗證信箱
function verifyEmail() {
  formRef.value?.validate((errors) => {
    if (errors) {
      return
    }
    apiVerifyEmail({ email: user.value.email }).then((response: any) => {
      if (response.status === 200) {
        if (response.data.result.isEmailExists) {
          notification.error({
            content: '失敗',
            meta: '此信箱已存在',
            duration: 3500
          })
          return
        }
        verifyStatus.value = true
        notification.success({
          content: '成功',
          meta: '此信箱可註冊',
          duration: 2500
        })
      }
    })
  })
}

// 註冊
function signIn() {
  formRef.value?.validate((errors) => {
    if (errors) {
      return
    }
    apiSignUp({
      name: user.value.name,
      email: user.value.email,
      password: user.value.password,
      phone: user.value.phone,
      birthday: user.value.birthday,
      address: {
        zipcode: user.value.zipcode,
        detail: user.value.detail
      }
    }).then((response: any) => {
      if (response.status === 200) {
        if (response.data.status) {
          notification.success({
            content: '成功',
            meta: '註冊成功',
            duration: 2500
          })
          loginPage()
        }
      }
    })
  })
}

// 下一步
function nextStep() {
  formRef.value?.validate((errors) => {
    if (errors) {
      return
    }
    currentStep.value = 2
  })
}

function loginPage() {
  router.push({ name: 'login' })
}

// 欄位驗證
const formRef = ref<FormInst | null>(null)
const userRules = ref({
  email: { type: 'email', required: true, message: '格式不正確', trigger: ['input', 'blur'] },
  password: {
    required: true,
    trigger: ['input', 'blur'],
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('必填')
      }
      if (!/^[a-z0-9]+$/.test(value)) {
        return new Error('僅能輸入英文字母及數字')
      }
      if (!/^(?=.*[a-z])/.test(value)) {
        return new Error('至少要有一個小寫英文字母')
      }
      if (value.length < 8) {
        return new Error('長度需大於等於8')
      }
    }
  },
  confirm: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('必填')
      } else if (value !== user.value.password) {
        return new Error('密碼不一致')
      }
      return
    },
    trigger: ['input', 'blur']
  },
  name: { required: true, message: '必填', trigger: ['input', 'blur'] },
  phone: {
    required: true,
    trigger: ['input', 'blur'],
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('必填')
      }
      if (!/^[0-9]+$/.test(value)) {
        return new Error('僅能輸入數字')
      }
      if (value.length < 10) {
        return new Error('長度不正確')
      }
    }
  },
  birthday: { required: true, message: '必填', trigger: ['input', 'blur'] },
  zipcode: { type: 'number', required: true, message: '必填', trigger: ['input', 'blur'] },
  detail: { required: true, message: '必填', trigger: ['input', 'blur'] },
  agree: {
    required: true,
    trigger: ['input', 'blur'],
    validator(rule: FormItemRule, value: boolean) {
      if (!value) {
        return new Error('請勾選')
      }
    }
  }
})

function disablePreviousDate(ts: number) {
  return ts > Date.now()
}

onMounted(() => {
  districtOptions = districtData.map((city) => ({
    guid: city.name,
    name: city.name,
    children: city.districts.map((district) => ({
      guid: parseInt(district.zip),
      name: district.name
    }))
  }))
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
