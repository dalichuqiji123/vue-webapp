import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import store from './store/index.js'
import router from './router.js'
import http from '@/utils/api.js'
Vue.prototype.$http=http
new Vue({
  router,
  store,
  render:h=>h(App)
}).$mount('#app')