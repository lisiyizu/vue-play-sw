<template>
  <div class="list-item" @click="jump_list">
    <img :src="list.picUrl" />
    <div class="con">
      <h3>{{list.topTitle}}</h3>
      <ul>
        <li v-for="(item,index) in list.songList" :key="index">
          <label>{{item.singername}}</label>
          -  {{item.songname}}
        </li>
      </ul>
      <i class="iconfont icon-zanting1"></i>
    </div>
  </div>
</template>

<script>
import api from '@/fetch/api'
export default {
  data () {
    return {
    }
  },
  props: {
    list: {
      type: Object,
      default: {
        id: 0,  // 当前排行榜的id, 对应后续接口参数
        picUrl: '',
        songList: {},
        topTitle: '榜单'
      }
    }
  },
  methods: {
    async jsonp (url) {
      let pro = await this.$http.jsonp(url, { jsonp: 'jsonpCallback' })
      let res = await pro.data
      return res
    },
    async jump_list () {
      let id = this.list.id
      let res = await this.jsonp(api.topList_songList(id))
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/rem.scss";
@import "../../assets/css/variable.scss";

.list-item {
  display: flex;
  align-items: center;
  margin: rem(20) rem(20);
  background: #fff;

  img {
    display: inline-block;
    width: rem(200);
    height: rem(200);
  }

  .con {
    position: relative;
    flex: 1;
    margin-left: rem(40);
    color: #666;

    h3 {
      font-size: rem(32);
      color: #000;
    }

    li {
      width: rem(400);
      font-size: rem(28);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    i {
      position: absolute;
      top: 40%;
      right: rem(20);
    }
  }
}
</style>
