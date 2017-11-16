<template>
  <div>
    <audio :src="songUrl" ref="audio"></audio>

    <div class="playBar" v-if="playBar">
      <div class="content">
        <img :src="albumUrl" />
        <h3>{{songname}}</h3>
      </div>

      <div class="icon">
        <i class="iconfont icon-shangyishou" @click="previous"></i>
        <i :class="logoClass" @click="play"></i>
        <i class="iconfont icon-xiayishou" @click="next"></i>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../fetch/api'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      songUrl: '',
      albumUrl: '',
      songname: '',
      playBar: true,
      logoClass: ''
    }
  },
  mounted () {
    this.update()
    this.listenEnd()
    this.logoClass = 'mid iconfont icon-zanting1'
  },
  watch: {
    song () {
      this.update()
      setTimeout(() => {
        this.$refs.audio.play()
        this.song.status = false
      }, 100)  // 防止快速切换歌曲的时候报错
    }
  },
  methods: {
    listenEnd () {
      this.$refs.audio.onended = () => {
        this.next()
      }
    },
    update () {
      this.logoClass = 'mid iconfont icon-zanting4'
      if (this.song.songmid) {
        this.songUrl = api.song(this.song.songmid)
      } else {
        this.$refs.audio.removeAttribute('src')
      }
      this.song.songname ? this.songname = this.song.songname : this.songname = 'Vue Music'
      this.song.albummid ? this.albumUrl = api.album(this.song.albummid) : this.albumUrl = require('../assets/img/play.png')
    },
    play () {
      if (this.song.songmid) {
        if (this.song.status) {
          this.$refs.audio.play()
          this.logoClass = 'mid iconfont icon-zanting4'
          this.song.status = false
        } else {
          this.$refs.audio.pause()
          this.logoClass = 'mid iconfont icon-zanting1'
          this.song.status = true
        }
      } else {
        this.$$toast('播放列表暂无歌曲')
      }
    },
    previous () {
      this.$store.commit('previous')
    },
    next () {
      this.$store.commit('next')
    }
  },
  computed: {
    ...mapState(['song']),
    ...mapState(['playList'])
  }
}
</script>

<style lang="scss">
@import "../assets/css/rem.scss";
@import "../assets/css/variable.scss";

.playBar {
  position: fixed;
  bottom: 0;
  min-width: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: rem(100);
    img {
      display: inline-block;
      width: rem(80);
      height: rem(80);
      margin-left: rem(20);
    }

    h3 {
      display: inline-block;
      margin-left: rem(20);
      width: rem(200);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: rem(20);
    i {
      margin-right: rem(20);
      font-size: rem(40);
      color: $green;
    }

    .mid {
      font-size: rem(50);
    }
  }
}
</style>
