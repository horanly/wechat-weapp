// 获取全局应用程序实例对象
const app = getApp();

// 创建页面实例对象
Page({
    // 页面的初始数据
    data: {
        movice: [],
        loading: true
    },

    handleStart() {
        wx.switchTab({
            url: '../index/index'
        })
    },

    // 生命周期函数，监听页面加载
    onLoad() {},

    // onReay 生命周期函数，监听页面初次渲染完成
    onReady() {},

    // 生命周期函数，监听页面显示
    onShow() { },

    // 生命周期函数，监听页面隐藏
    onHide() {},

    // 生命周期函数，监听页面卸载
    onUnload() {},

    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownrefresh() {}

})