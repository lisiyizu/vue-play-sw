const mutation = {
  radio (state, data) {
    state.playList = []

    for (let i = 0; i < data.length; i++) {
      state.playList[i] = {
        albummid: data[i].album.mid,
        songmid: data[i].mid,
        songname: data[i].name,
        singername: data[i].singer[0].name,
        status: true,
        index: i,
        currentTime: 0
      }
    }
    state.song = state.playList[0]
  },

  previous (state) {
    if (state.playList.length === 1) {
      this.$$toast('当前列表只有一首歌')
      return
    }

    let index = state.song.index
    if (index === 0) {
      index = state.playList.length - 1
    } else {
      index--
    }
    state.song = state.playList[index]
  },

  next (state) {
    if (state.playList.length === 1) {
      this.$$toast('当前列表只有一首歌')
      return
    }

    let index = state.song.index
    if (index === state.playList.length - 1) {
      index = 0
    } else {
      index++
    }
    state.song = state.playList[index]
  },

  topList (state, songList) {
    state.playList = []

    for (let i = 0; i < songList.length; i++) {
      let data = songList[i].data
      state.playList[i] = {
        albummid: data.albummid,
        songmid: data.songmid,
        songname: data.songname,
        singername: data.singer[0].name,
        status: true,
        index: i,
        currentTime: 0
      }
    }
  },

  switchSong (state, index) {
    state.song = state.playList[index]
  },

  clearPlayList (state) {
    state.playList = []
  },

  addSearch (state, result) {
    for (let i = 0; i < result.length; i++) {
      let data = result[i]
      state.playList[i] = {
        albummid: data.albummid,
        songmid: data.songmid,
        songname: data.songname,
        singername: data.singer[0].name,
        status: true,
        index: i,
        currentTime: 0
      }
    }
  }
}

export default mutation
