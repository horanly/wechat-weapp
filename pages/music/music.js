const app = getApp()

Page({
    data: {
        title: '',
        movie: {}
    },

    // onReady 生命周期函数--监听页面初次渲染完成
    onReady() {
        // wx.setNavigationBarTitle({
        //     title: this.data.title + ' « 电影'
        // })
    },

    // 生命周期函数--监听页面加载
    onLoad(params) {
        // wx.showLoading({ title: '拼命加载中...' })

        // app.douban.findOne(params.id).then(res => {
        //     this.setData({
        //         title: res.title,
        //         movie: res
        //     })
        //     wx.setNavigationBarTitle({ title: res.title + ' « 电影' })
        //     wx.hideLoading()
        // }).catch(e => {
        //     this.setData({ title: '获取数据异常', movie: {} })
        //     console.error(e)
        //     wx.hideLoading()
        // })
    },

    // onShareAppMessage 小程序分享函数
    onShareAppMessage(){
        return {
            title: this.data.title,
            desc: this.data.title,
            path: '/pages/item?id=' + this.data.id
        }
    }
})