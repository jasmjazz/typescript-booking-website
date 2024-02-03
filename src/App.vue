<template>
  <n-config-provider :locale="zhTW" :date-locale="dateZhTW">
    <n-notification-provider>
      <RouterView />
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { zhTW, dateZhTW } from 'naive-ui'
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>

<style lang="scss">
@import 'assets/scss/home-page.scss';
@import 'assets/scss/register-page.scss';
@import 'assets/scss/login-page.scss';
@import 'assets/scss/room-page.scss';
</style>
