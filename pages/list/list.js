const app = getApp()

Page({
    data: {
        title: '',
        subtitle: '加载中...',
        type: 'in_theaters',
        hasMore: true,
        page: 1,
        size: 20,
        movies: []
    },

    // onReady 生命周期函数--监听页面初次渲染完成
    onReady() {
        wx.setNavigationBarTitle({
            title: this.data.title + ' « 电影'
        })
    },

    // onLoad 生命周期函数--监听页面加载
    onLoad(params) {
        this.data.title = params.title || this.data.title
        this.data.type = params.type || this.data.type

        this.loadMore()
    },

    loadMore() {
        if (!this.data.hasMore) return
        wx.showLoading({ title: '拼命加载中...' })
        this.setData({ subtitle: '加载中...' })

        return app.douban.find(this.data.type, this.data.page++, this.data.size).then(d => {
            if (d.subjects.length) {
                this.setData({
                    subtitle: d.title,
                    movies: this.data.movies.concat(d.subjects)
                })
            } else {
                this.setData({ subtitle: d.title, hasMore: false })
            }
            wx.hideLoading()
        }).catch(e => {
            this.setData({ subtitle: '获取数据异常' })
            console.error(e)
            wx.hideLoading()
        })
    },

    /**
     * onPullDownRefresh 页面相关处理函数--监听用户下拉动作
     * stopPullDownRefresh 刷新完成后停止刷新动作
     */
    onPullDownRefresh() {
        this.setData({
            movies: [],
            page: 1,
            hasMore: true
        })
        this.loadMore().then(() => {
            wx.stopPullDownRefresh()
        })
    },

    // onReachBottom 下拉加载函数
    onReachBottom() {
        this.loadMore()
    }



})