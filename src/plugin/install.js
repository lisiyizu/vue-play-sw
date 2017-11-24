import { loadingdirective, toast } from 'kf-component-vue'

function install (Vue) {
  Vue.directive('loading', loadingdirective)
  Vue.prototype.$$toast = toast
}

export default install
