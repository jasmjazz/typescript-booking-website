<template>
  <n-notification-provider>
    <RouterView />
  </n-notification-provider>
</template>

<!-- <script setup lang="ts">
import { RouterView } from 'vue-router'
</script> -->

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
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
