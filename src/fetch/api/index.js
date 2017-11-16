const url = {
  recom: '//c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  topList: '//c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
  hotkey: '//c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',

  radio (radioId) {
    return `//c.y.qq.com/v8/fcg-bin/fcg_v8_radiosonglist.fcg?labelid=${radioId}&format=jsonp`
  },

  lyric (id) {
    return `//c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid=${id}&songtype=0&callback=jsonp1`
  },

  song: (songmid) => {
    return `//ws.stream.qqmusic.qq.com/C100${songmid}.m4a?fromtag=0`
  },

  album: (albummid) => {
    return `//y.gtimg.cn/music/photo_new/T002R150x150M000${albummid}.jpg?max_age=2592000`
  },

  searchlist: (keywords, page) => {
    return `//c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?w=${keywords}&p=${page}&n=30`
  }

  // http://music.qq.com/miniportal/static/lyric/34/101125834.xml
}

export default url
