<template>
  <div class="topList" v-loading.body.noMask="visible">
    <list-item v-for="(list,index) in lists" :key="index" :list="list"></list-item>
  </div>
</template>

<script>
import api from '@/fetch/api'
import item from './topList/listItem.vue'
export default {
  data () {
    return {
      visible: true,
      lists: []
    }
  },
  async mounted () {
    let res = await this.jsonp(api.topList)
    this.lists = res.data.topList

    this.$nextTick(() => {
      this.visible = false
    })
  },
  methods: {
    async jsonp (url) {
      let pro = await this.$http.jsonp(url, { jsonp: 'jsonpCallback' })
      let res = await pro.data
      return res
    }
  },
  components: {
    'list-item': item
  }
}
</script>

<style lang="scss">
@import "../assets/css/rem.scss";

.topList {
  padding-bottom: rem(150);
}
</style>
