import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 基本css
import './base/css'
// 第三方插件
import ViewUI from 'view-design'

Vue.use(ViewUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
