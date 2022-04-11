import Vue from 'vue'
import qs from 'qs'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// 引入axios
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'

// import '@/icons' // icon
// import '@/permission' // permission control

import store from './store/store'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false

// 刷新保存状态
if (sessionStorage.getItem('store')) {
  store.replaceState(
    Object.assign({},
      store.state,
      JSON.parse(sessionStorage.getItem('store'))
    )
  )
  sessionStorage.removeItem('store')
}

// 监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('store', JSON.stringify(store.state))
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
