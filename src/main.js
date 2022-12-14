import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/common.less'
import '@/assets/css/index.css'
import * as echarts from 'echarts'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

Vue.config.productionTip = false
Object.defineProperties(Vue.prototype, {
  echarts: { get: () => echarts }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
