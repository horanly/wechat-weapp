//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面初始数据
   */

  data: {
    boards: [
      { key: 'in_theaters' },
      { key: 'coming_soon' },
      { key: 'new_movies' },
      { key: 'top250' },
      // { key: 'weekly' },
      // { key: 'us_box' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.showLoading({ title: '拼命加载中...' })

    // 循环调取
    const tasks = this.data.boards.map(board => {
      return app.douban.find(board.key, 1, 8).then(d => {
        board.title = d.title
        board.movies = d.subjects
        return board
      })
    })

    Promise.all(tasks).then(boards => {
      console.log(boards)
      this.setData({
        boards: boards,
        loadding: false
      })
      wx.hideLoading()
    })
  },

  // onShareAppMessage 小程序分享函数
  onShareAppMessage() {
    return {
      title: '电影推荐',
      desc: '电影推荐',
      path: '/pages/index'
    }
  }
})
