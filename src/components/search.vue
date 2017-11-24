<template>
  <div class="search">
    <div class="head">
      <i class="iconfont icon-sousuo1" @click="search"></i>
      <input class="input" type="text" placeholder="搜索歌曲、歌单、专辑" v-model="value" @keyup.13="search"/>
    </div>

    <ul>
      <li v-for="(item,index) in result" @click="listen(index)">
        <div class="cell">
          <div class="logo">
            <i class="iconfont icon-icon-test"></i>
          </div>
          <div class="desc">
            <p class="title">{{item.songname}}</p>
            <p class="singer">{{item.singer[0].name}}</p>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { Search, Cell } from 'mint-ui'
import api from '../fetch/api'
export default {
  data () {
    return {
      value: '',
      result: [],
      page: 1
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.visible = false
    // })
  },
  methods: {
    async jsonp (url) {
      let pro = await this.$http.jsonp(url, { jsonp: 'jsonpCallback' })
      let res = await pro.data
      return res
    },
    init () {
      this.result = []
      this.$store.commit('clearPlayList')
      this.page = 1
    },
    async search () {
      this.init()
      let keywords = this.value

      for (let i = 0; i < 19; i++) {
        this.page++
        let res = await this.jsonp(api.searchlist(keywords, this.page))
        this.result = this.result.concat(res.data.song.list)
      }

      this.$store.commit('addSearch', this.result)
    },
    listen (index) {
      this.$store.commit('switchSong', index)
    }
  },
  components: {
    'mt-search': Search,
    'mt-cell': Cell
  }
}
</script>

<style lang="scss">
@import "../assets/css/rem.scss";
@import "../assets/css/variable.scss";

.search {
  background: #fff;
  min-height: 11rem;
}

.head {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: rem(15);
  background-color: #f4f4f4;
  i {
    position: absolute;
    left: rem(30);
    font-size: rem(45);
    margin-right: rem(15);
    color: #666;
  }
  .input {
    width: 100%;
    height: rem(80);
    padding-left: rem(80);
    border: none;
    border-radius: 3px;
    font-size: rem(28);
    outline: none;
    color: #666;
  }
}

.cell {
  display: flex;
  align-items: center;
  height: rem(110);
  border-bottom: rem(1) solid rgba(0,0,0,0.2);

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(100);

    i {
      font-size: rem(40);
    }
  }

  .desc {
    flex: 1;

    .title {
      font-size: rem(30);
    }

    .singer {
      color: #666;
    }
  }
}
</style>
