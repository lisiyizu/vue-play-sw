// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/main.scss'
import install from '@/plugin/install.js'

Vue.config.productionTip = false

Vue.use(install)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// serviceWorker

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js', {
//     scope: '/'
//   }).then(function (registration) {
//     console.log('success', registration)
//   }).catch(function (err) {
//     console.log(err)
//   })
// }
