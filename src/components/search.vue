<template>
  <div v-loading.body.noMask="visible">
    search
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.visible = false
    })
  }
}
</script>

<style lang="css">
</style>
