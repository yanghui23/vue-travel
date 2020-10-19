
// main.js 整个项目的入口文件

import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/swiper-bundle.css'

// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
// if (process.env.NODE_ENV === 'development') {
//   Vue.config.devtools = true
// } else {
//   Vue.config.devtools = false
// }

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
