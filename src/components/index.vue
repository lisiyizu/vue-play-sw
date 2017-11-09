<template>
  <div>
    index
    <div @click="alert">
      提示
    </div>
  </div>
</template>

<script>
import toast from 'kf-component-vue/lib/toast'
import 'kf-component-vue/lib/toast/style.css'
export default {
  data () {
    return {
    }
  },
  methods: {
    alert () {
      toast('提示')
    }
  }
}
</script>

<style lang="scss">
  div {
    font-size: rem(40);
  }
</style>
