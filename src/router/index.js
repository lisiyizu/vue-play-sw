import Vue from 'vue'
import Router from 'vue-router'
import index from './index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/recommend',
      name: 'index',
      component: index
    },
    {
      path: '/topList',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'index',
      component: index
    }
  ]
})
