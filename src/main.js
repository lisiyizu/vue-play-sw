// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import '@/assets/css/main.scss'
import install from '@/plugin/install.js'

Vue.config.productionTip = false

Vue.use(install)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// serviceWorker
//
if ('serviceWorker' in navigator) {
  console.log('service-worker.js 第十二修改, 优化缓存策略')
  navigator.serviceWorker.register('service-worker.js', {
    scope: '/vue-play-pwa/'
  }).then(function (registration) {
    console.log('success', registration)
  }).catch(function (err) {
    console.log(err)
  })
}
