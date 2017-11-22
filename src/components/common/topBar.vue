<template>
  <div class="topbar">
    <i class="iconfont icon-fanhui" @click="back"></i>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default () {
        return 'title'
      }
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/rem.scss";
.topbar{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: rem(90);
  font-size: rem(36);
  background: #fff;
  i{
    position: absolute;
    left: rem(20);
    top: 20%;
    font-size: rem(40);
    color: #666;
  }
}
</style>
