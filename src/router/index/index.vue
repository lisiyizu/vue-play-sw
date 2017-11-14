<template>
  <div>
    <!-- <audio ref="audio" src="http://ws.stream.qqmusic.qq.com/C1000023O1LH0Ha1OO.m4a?fromtag=0"></audio> -->
    <header class="header">
      <i class="iconfont icon-icon-test"></i>
    </header>

    <div class="tabs">
      <div class="tab" :class="{ active: currentIndex === index }" v-for="(tab, index) in tabs" @click="currentIndex = index">{{tab.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          text: '推荐'
        },
        {
          text: '排行榜'
        },
        {
          text: '搜索'
        }
      ],
      currentIndex: 0
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    switchTab () {

    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import "../../assets/css/rem.scss";
@import "../../assets/css/variable.scss";

.tabs {
  display: flex;

  .tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: rem(80);
    text-align: center;
    font-size: rem(30);
    transition: all 0.5s;
    border: 2px solid rgba(0,0,0,0);
  }

  .active {
    color: $green;
    border-bottom: 2px solid $green;
  }
}
</style>
