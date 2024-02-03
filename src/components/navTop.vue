<template>
  <nav class="top-nav">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="" />
    </div>

    <span class="menu-btn" @click="menuOpen = !menuOpen">
      <template v-if="!menuOpen">☰</template>
      <template v-else>X</template>
    </span>
    <div class="link" :class="{ open: menuOpen }">
      <div class="link-inner">
        <RouterLink to="/">客房旅宿</RouterLink>
        <n-dropdown
          v-if="userName"
          trigger="hover"
          :options="[
            {
              label: '登出',
              key: 0
            }
          ]"
          @select="logout"
        >
          <span>{{ userName }}</span>
        </n-dropdown>
        <RouterLink v-else to="/login">會員登入</RouterLink>
        <RouterLink class="go-order" to="/room">立即訂房</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import VueCookies from 'vue-cookies'
import { onMounted, ref } from 'vue'
import { useNotification } from 'naive-ui'
import { useRouter } from 'vue-router'

const cookie: any = VueCookies
const notification = useNotification()
const router = useRouter()

const menuOpen = ref<boolean>(false)
const userName = ref<string | null>(null)

// 登出
function logout() {
  userName.value = ''
  cookie.keys().forEach((item: any) => cookie.remove(item))
  notification.success({
    content: '成功',
    meta: '登出成功',
    duration: 2000
  })
  router.push({ name: 'home' })
}

onMounted(() => {
  if (cookie.get('TOKEN')) {
    userName.value = cookie.get('USER_NAME')
  }
})
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 99;
  .logo {
    img {
      width: 200px;
    }
  }

  .menu-btn {
    display: none;
    position: relative;
    z-index: 1;
    color: #fff;
    cursor: pointer;
    @media screen and (max-width: 850px) {
      display: block;
    }
  }
  .link {
    .link-inner {
      @media screen and (max-width: 850px) {
        flex: 1;
        padding: 20px;
      }
    }
    span,
    a {
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      font-size: 0.9em;
      font-weight: 400;
      margin-left: 15px;
      border-radius: 5px;
      padding: 10px 20px;
      letter-spacing: 2px;
      @media screen and (max-width: 850px) {
        margin-left: 0px;
        margin-bottom: 10px;
      }
    }
    a.go-order {
      background-color: #bf9d7d;
    }

    @media screen and (max-width: 850px) {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      background-color: #000;
      width: 100vw;
      display: flex;
      align-items: center;
      transform: translate(-100%);
      transition: all 0.3s;

      &.open {
        transform: translate(0);
      }

      a {
        display: block;
        text-align: center;
      }
      span {
        display: block;
        text-align: center;
      }
    }
  }
}
</style>
