<template>
  <div>
    <div class="swipe">
      <mt-swipe>
        <mt-swipeItem v-for="(item,index) in slider" :key="index">
          <a :href="item.linkUrl"><img :src="item.picUrl" /></a>
        </mt-swipeItem>
      </mt-swipe>
    </div>

    <div class="radio">
      <h2 class="radio_title">电台</h2>

      <ul>
        <li v-for="(item, index) in radioList" @click="radio(index)">
          <div class="pic">
            <img :src="item.picUrl" />
            <i class="iconfont icon-zanting1"></i>
          </div>
          <h3 class="item_title">{{item.Ftitle}}</h3>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Swipe, SwipeItem } from 'mint-ui'
import api from '../fetch/api'

export default {
  data () {
    return {
      slider: {},
      radioList: {}
    }
  },
  async mounted () {
    let recom = await this.jsonp(api.recom)
    let data = recom.data
    this.slider = data.slider
    this.radioList = data.radioList
  },
  methods: {
    async jsonp (url) {
      let pro = await this.$http.jsonp(url, { jsonp: 'jsonpCallback' })
      let res = await pro.data
      return res
    },
    async radio (index) {
      let radioId = this.radioList[index].radioid
      let res = await this.jsonp(api.radio(radioId))
      let data = res.data
      this.$store.commit('radio', data)
    }
  },
  computed: {
    ...mapState(['song']),
    ...mapState(['playList'])
  },
  components: {
    'mt-swipe': Swipe,
    'mt-swipeItem': SwipeItem
  }
}
</script>

<style lang="scss">
@import "../assets/css/rem.scss";
@import "../assets/css/variable.scss";

.swipe {
  height: rem(300);
}

.radio {

  .radio_title {
    padding-left: rem(20);
    height: rem(100);
    line-height: rem(100);
    font-size: rem(32);
    background: #fff;
    color: #666;
  }

  ul {

    li {
      display: inline-block;
      margin-left: rem(15);
      background: #fff;

      .pic {
        position: relative;

        img {
          width: rem(350);
          height: rem(350);
        }

        i {
          position: absolute;
          bottom: rem(20);
          right: rem(20);
          color: #fff;
          font-size: rem(40);
        }
      }

      h3 {
        height: rem(80);
        font-size: rem(28);
        padding-left: rem(10);
        color: #666;
      }
    }
  }
}
</style>
