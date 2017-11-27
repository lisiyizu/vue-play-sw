import { loadingdirective, toast } from 'kf-component-vue'

function install (Vue) {
  Vue.directive('loading', loadingdirective)
  Vue.prototype.$$toast = toast
  Vue.prototype.$$pic = function (url) {   // 把http的图片链接协议去掉
    return url.slice(5)
  }
}

export default install
