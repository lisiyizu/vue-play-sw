import 'kf-component-vue/lib/loading/style.css'
import { loadingDirective } from 'kf-component-vue/lib/loading'

import 'kf-component-vue/lib/toast/style.css'
import toast from 'kf-component-vue/lib/toast'

function install (Vue) {
  Vue.directive('loading', loadingDirective)
  Vue.prototype.$$toast = toast
}

export default install
