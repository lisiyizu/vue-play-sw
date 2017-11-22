<template>
  <div class="index">
    <header class="header">
      <i class="iconfont icon-icon-test"></i>
      <h2>vue-play</h2>
    </header>

    <div class="tabs">
      <div class="tab" :class="{ active: currentIndex === index }" v-for="(tab, index) in tabs" @click="switchTab(index)">
        {{tab.text}}
      </div>
    </div>

    <recommend v-if="currentIndex === 0"></recommend>

    <topList v-if="currentIndex === 1"></topList>

    <search v-if="currentIndex === 2"></search>

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
          text: '推荐',
          path: '/recommend',
          index: 0
        },
        {
          text: '排行榜',
          path: '/topList',
          index: 1
        },
        {
          text: '搜索',
          path: '/search',
          index: 2
        }
      ],
      currentIndex: 0
    }
  },
  mounted () {
    this.routeSet()
  },
  computed: {
  },
  methods: {
    routeSet () {
      let path = this.$route.path
      for (let val of this.tabs) {
        if (val.path === path) {
          this.currentIndex = val.index
        }
      }
    },
    switchTab (index) {
      this.currentIndex = index
      for (let val of this.tabs) {
        if (val.index === index) {
          this.$router.replace({ path: val.path })
        }
      }
    }
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
  background-color: #000;
  color: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.1);

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
    color: #666;
  }

  .active {
    color: $green;
    border-bottom: 2px solid $green;
  }
}
</style>
