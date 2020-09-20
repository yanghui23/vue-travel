import Vue from 'vue'
import Router from 'vue-router'
// @ 表示 src 目录
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
