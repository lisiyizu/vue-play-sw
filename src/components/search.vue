<template>
  <div class="search" v-loading.body.noMask="visible">
    <mt-search
      ref="list"
      v-model="value"
      cancel-text="取消"
      placeholder="搜索歌曲、歌单、专辑"
      autofocus
      @keyup.native.enter="search">
      <mt-cell
            v-for="(item,index) in result"
            :title="item.songname"
            :value="item.singer[0].name"
            :key="index"
            @click.native="listen(index)">
      </mt-cell>
      <div ref="tempBot"></div>
    </mt-search>
  </div>
</template>

<script>
import { Search, Cell } from 'mint-ui'
import api from '../fetch/api'
export default {
  data () {
    return {
      visible: true,
      value: '',
      result: [],
      page: 1
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.visible = false
    })
  },
  methods: {
    async jsonp (url) {
      let pro = await this.$http.jsonp(url, { jsonp: 'jsonpCallback' })
      let res = await pro.data
      return res
    },
    async search () {
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
}

.mint-searchbar-cancel {
  color: $green;
}

.mint-searchbar {
  background: #f4f4f4;
}

.mint-searchbar-inner .mintui-search {
  font-size: rem(40);
  margin-right: rem(20);
}

.mint-searchbar-core {
  font-size: rem(28);
  color: #666;
}

.mint-search-list {
  top: rem(200);
}
</style>
