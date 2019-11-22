// //获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad() {
    app.wechat.login().then(res => {
      if (res.code) {
        console.log('登录成功！' + res.code)
      } else {
        console.error('获取用户登录态失败！' + res.errMsg)
      }
    })
    this.getCache()
  },

  getCache() {
    return new Promise(resolve => {
      app.wechat.getStorage('weChat-user-data')
        .then(res => {
          const { userInfo } = res.data
          if (userInfo) {
            return resolve(res.data)
          } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
              this.setData({
                userInfo: res.userInfo,
                hasUserInfo: false
              })
            }
          } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            this.getUserInfo()
          }
          return resolve(null)
        })
        .catch(e => resolve(null))
    })
  },

  getUserInfo() {
    app.wechat.getUserInfo().then(res => {
      console.log(res)
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: false
      })
      return app.wechat.setStorage('weChat-user-data', {
        userInfo: res.userInfo
      })
    })
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage() {
    return {
      title: "电影推荐",
      desc: "电影推荐",
      path: '/pages/index'
    }
  },
  shareAppMessage() {
    this.onShareAppMessage()
  }
})
