<template>
  <div class="listpage">
    <topBar title="topList"></topBar>

    <div class="info">

      <div class="content">
        <img class="album" :src="pic" />
        <div class="desc">
          <h3>{{topinfo.ListName}}</h3>
          <p>
            第{{topList.day_of_year || 323}}天
          </p>
          <p>
            {{topList.update_time}} 更新
          </p>
        </div>
      </div>

      <img class="blur" :src="pic" />
    </div>

    <div class="all">
      <h3 class="song-title">排行榜 共{{topList.cur_song_num}}首</h3>

      <ul>
        <li class="cell" v-for="(song, index) in songList" @click="listen(index)">
          <span class="index">{{index + 1}}</span>

          <div class="song-desc">
            <p class="song-name">{{song.data.songname}}</p>
            <p class="singer-name">{{song.data.singer[0].name}}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '@/fetch/api'
import topBar from '@/components/common/topBar.vue'
export default {
  data () {
    return {
      topList: {},
      songList: [],
      topinfo: {},
      pic: ''
    }
  },
  async mounted () {
    let id = this.$route.query.topid
    let res = await this.jsonp(api.topList_songList(id))
    console.log(res)

    this.topList = res
    this.songList = res.songlist
    this.topinfo = res.topinfo
    this.pic = this.$$pic(this.topinfo.pic_album)

    this.$store.commit('topList', this.songList)

    // this.$nextTick(() => {
    //   this.visible = false
    // })
  },
  methods: {
    async jsonp (url) {
      let pro = await this.$http.jsonp(url, { jsonp: 'jsonpCallback', jsonpCallback: 'getCallBack' })
      let res = await pro.data
      return res
    },
    listen (index) {
      this.$store.commit('switchSong', index)
    }
  },
  computed: {
    ...mapState(['song']),
    ...mapState(['playList'])
  },
  components: {
    topBar
  }
}
</script>

<style lang="scss">
@import '../../assets/css/rem.scss';

.info {
  position: relative;
  width: rem(750);
  height: rem(350);
  background: #fff;

  .content {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0,0,0,.5);

    .album {
      width: rem(250);
      height: rem(250);
    }

    .desc {
      width: rem(400);
      font-size: rem(16);
      color: #fff;

      h3 {
        font-size: rem(36);
      }

      p {
        margin-top: rem(10);
        font-size: rem(28);
      }
    }
  }

  .blur {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    filter: blur(25px);
  }
}

.all {
  background: #fff;
  padding-bottom: rem(150);

  .song-title {
    padding-left: rem(30);
    height: rem(90);
    line-height: rem(90);
    font-size: rem(28);
    color: #666;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;

    .index {
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(120);
      height: rem(120);
      font-size: rem(32);
    }

    .song-desc {
      flex: 1;
    }

    .song-name {
      font-size: rem(32);
    }

    .singer-name {
      font-size: rem(28);
      color: #666;
    }
  }
}

</style>
