
import { createApp, reactive } from 'vue'
import myLoad from '@/plugins/loadingView.vue'
 
let loadingRequestCount = 0;

const msg = reactive({
  show: false,
  title: 'loading...'
})

const $loading = createApp(myLoad, {msg}).mount(document.createElement('div'))
const load = {
  show(title: any = msg.title) { // 控制显示loading的方法
    msg.show = true
    msg.title = title
    document.body.appendChild($loading.$el)
  },

  hide() {
    msg.show = false
  }
}
export  { load }
 
const showLoading = () => {
    if (loadingRequestCount === 0) {
      load.show();
       
    };
    loadingRequestCount++
}
 
// 编写一个隐藏loading的函数，并且记录请求次数 --
const hideLoading = () => {
    if (loadingRequestCount <= 0) return
    loadingRequestCount--
    if (loadingRequestCount === 0) {
      load.hide();
    }
 }
 
 export {
    showLoading,
    hideLoading
 }