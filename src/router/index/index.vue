<template>
  <div class="index">
    <!-- <audio ref="audio" src="//ws.stream.qqmusic.qq.com/C1000023O1LH0Ha1OO.m4a?fromtag=0"></audio> -->
    <header class="header">
      <i class="iconfont icon-icon-test"></i>
      <h2>vue-play</h2>
    </header>

    <div class="tabs">
      <div class="tab" :class="{ active: currentIndex === index }" v-for="(tab, index) in tabs" @click="currentIndex = index">{{tab.text}}</div>
    </div>

    <recommend></recommend>
  </div>
</template>

<script>
import recommend from '@/components/recommend.vue'
import search from '@/components/search.vue'
import topList from '@/components/topList.vue'

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
  },
  components: {
    recommend,
    topList,
    search
  }
}
</script>

<style lang="scss">
@import "../../assets/css/rem.scss";
@import "../../assets/css/variable.scss";

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: rem(90);
  background-color: $green;

  i {
    font-size: rem(40);
    font-weight: 600;
  }

  h2 {
    margin-left: rem(30);
  }
}

.tabs {
  display: flex;
  background: #fff;

  .tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: rem(80);
    text-align: center;
    font-size: rem(30);
    transition: all 0.4s;
    border: 2px solid rgba(0,0,0,0);
  }

  .active {
    color: $green;
    border-bottom: 2px solid $green;
  }
}
</style>
