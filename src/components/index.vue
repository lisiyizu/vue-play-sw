<template>
  <div v-loading.body="false" loading-text="加载中....">
    index
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$$toast('提示')
  },
  methods: {
  }
}
</script>

<style lang="scss">
  div {
    font-size: rem(40);
  }
</style>
