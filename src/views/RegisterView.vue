<template>
  <div class="register-page">
    <nav class="top-nav">
      <div class="logo" @click="homepage">
        <img src="@/assets/img/logo.png" alt="" />
      </div>
    </nav>
    <div class="content-wrap">
      <div class="img-wrap">
        <img src="@/assets/img/register.png" alt="" />
      </div>
      <div class="form-wrap">
        <div class="form-inner">
          <div class="sub-title" :style="{ display: show ? 'block' : 'none' }">
            享樂酒店，誠摯歡迎
          </div>
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
                      maxlength="50"
                      clearable
                      placeholder="請輸入密碼"
                    />
                  </n-form-item>
                  <n-form-item label="確認密碼" path="confirm" style="margin-bottom: 20px">
                    <n-input
                      v-model:value="user.confirm"
                      type="password"
                      maxlength="50"
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
                @click.prevent="verifyEmail"
              >
                驗證
              </button>
              <button v-else type="button" class="btn gray" @click.prevent="nextStep">
                下一步
              </button>
            </template>

            <template v-if="currentStep === 2">
              <n-form ref="formRef" :model="user" :rules="userRules">
                <n-form-item label="姓名" path="name">
                  <n-input
                    v-model:value="user.name"
                    type="text"
                    maxlength="50"
                    clearable
                    placeholder="請輸入姓名"
                  />
                </n-form-item>
                <n-form-item label="手機號碼" path="phone">
                  <n-input
                    v-model:value="user.phone"
                    type="text"
                    maxlength="50"
                    clearable
                    placeholder="請輸入手機號碼"
                  />
                </n-form-item>
                <n-form-item label="生日" path="birthday">
                  <n-date-picker
                    style="width: 100%"
                    v-model:formatted-value="user.birthday"
                    type="date"
                    clearable
                    placeholder="請選擇日期"
                  />
                </n-form-item>
                <n-grid x-gap="12" :cols="2">
                  <n-gi>
                    <n-form-item label="縣市" path="city">
                      <n-select
                        size="large"
                        filterable
                        clearable
                        v-model:value="user.city"
                        placeholder="請選擇縣市"
                      />
                    </n-form-item>
                  </n-gi>
                  <n-gi>
                    <n-form-item label="行政區" path="district">
                      <n-select
                        size="large"
                        filterable
                        clearable
                        v-model:value="user.district"
                        placeholder="請選擇行政區"
                      />
                    </n-form-item>
                  </n-gi>
                </n-grid>

                <n-form-item label="地址" path="address">
                  <n-input
                    v-model:value="user.address"
                    type="text"
                    maxlength="200"
                    clearable
                    placeholder="請輸入地址"
                  />
                </n-form-item>

                <label for="" class="read"
                  ><input type="checkbox" /> 我已閱讀並同意本站使用規範</label
                >

                <button class="btn yellow">完成註冊</button>
              </n-form>
            </template>

            <div class="has-account">
              已經有會員了嗎？ <span @click="changePage"> 立即登入</span>
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
import { apiVerifyEmail } from '@/api/user/register'
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
  city: string | null
  district: string | null
  address: string
}

const currentStep = ref<number>(2)
const show = ref<boolean>(true)
const verifyStatus = ref<boolean>(false)
const user = ref<User>({
  email: '',
  password: '',
  confirm: '',
  name: '',
  phone: '',
  birthday: null,
  city: null,
  district: null,
  address: ''
})

// 驗證信箱
function verifyEmail() {
  formRef.value.validate((errors) => {
    if (errors) {
      return
    }
    apiVerifyEmail({ email: user.value.email }).then((response: any) => {
      if (response.status === 200) {
        console.log(response)
        if (response.data.status) {
          verifyStatus.value = true
          notification.success({
            content: '驗證成功',
            meta: '此信箱可使用',
            duration: 2500
          })
        }
      }
    })
  })
}

// 下一步
function nextStep() {
  formRef.value.validate((errors) => {
    if (errors) {
      return
    }
    currentStep.value = 2
    show.value = false
  })
}

function changePage() {
  router.push({ name: 'login' })
}

function homepage() {
  router.push({ name: 'home' })
}

// 欄位驗證
const formRef = ref<FormInst | null>()
const userRules = ref({
  email: { required: true, message: '必填', trigger: ['input', 'blur'] },
  password: {
    required: true,
    message: '必填',
    trigger: ['input', 'blur']
  },
  confirm: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('必填')
      } else if (value !== user.value.password) {
        return new Error('密碼不一致')
      }
      return true
    },
    trigger: ['input', 'blur']
  }
})

onMounted(() => {
  console.log(districtData)
})
</script>

<style lang="scss">
.register-page {
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100vh;
  overflow: hidden;

  .top-nav {
    z-index: 99;
    padding: 10px;
    .logo {
      img {
        width: 200px;

        @media screen and (max-width: 850px) {
          width: 150px;
        }
      }
    }
  }
  .content-wrap {
    flex: 1;
    min-height: 1px;
    display: flex;
    // overflow: auto;

    .img-wrap {
      width: 50%;

      @media screen and (max-width: 850px) {
        display: none;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .form-wrap {
    flex: 1;
    background-image: url('@/assets/img/line2.png');
    background-repeat: no-repeat;
    background-size: 100% auto;

    .sub-title {
      color: #bf9d7d;
      font-size: 0.7em;
      margin-bottom: 5px;
    }

    .form-title {
      color: #fff;
      font-weight: 700;
      font-size: 38px;
      margin-bottom: 20px;
      @media screen and (max-width: 850px) {
        font-size: 30px;
      }
    }
    .form-inner {
      max-width: 480px;
      margin: 0 auto;
      padding: 10px;
    }
    .steps {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      .step {
        text-align: center;
        opacity: 0.8;
        .status {
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #fff;
          color: #fff;
          border-radius: 50%;
          display: inline-block;
          margin-bottom: 20px;
        }
        .text {
          color: #fff;
          font-size: 0.7em;
        }

        &.fill {
          opacity: 1;
          .status {
            background-color: #bf9d7d;
            border: 1px solid #bf9d7d;
            color: #fff;
          }
        }
      }
      .line {
        flex: 1;
        height: 1px;
        background-color: #fff;
      }
    }
    .form {
      label {
        color: #fff;
        font-size: 0.8em;
        // margin-top: 20px;
        display: block;
        // margin-bottom: 10px;
      }
      input:not([type='checkbox']),
      select {
        background-color: #fff;
        line-height: 40px;
        height: 40px;
        border-radius: 5px;
        display: block;
        border: none;
        width: 100%;
        // margin-bottom: 5px;
      }

      .flex {
        display: flex;
        input,
        select {
          margin-right: 5px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .btn {
        width: 100%;
        background-color: #ccc;
        border: none;
        display: block;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        padding: 0;
        cursor: pointer;
        margin-top: 25px;
        &.yellow {
          background-color: #bf9d7d;
          color: #fff;
        }
      }

      .read {
        color: #fff;
      }

      .has-account {
        font-size: 0.7em;
        margin-top: 20px;
        color: #fff;
        cursor: default;
        span {
          color: #bf9d7d;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
