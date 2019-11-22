function login() {
    return new Promise((resolve, reject) => {
        wx.login({
            success: resolve,
            fail: reject
        })
    })
}

function getUserInfo() {
    return new Promise((resolve, reject) => {
        wx.getUserInfo({
            success: resolve,
            fail: reject
        })
    })
}

function setStorage() {
    return new Promise((resolve, reject) => {
        wx.setStorage({
            success: resolve,
            fail: reject
        })
    })
}

function getStorage() {
    return new Promise((resolve, reject) => {
        wx.getStorage({
            success: resolve,
            fail: reject
        })
    })
}

function getLocation() {
    return new Promise((resolve, reject) => {
        wx.getLocation({
            success: resolve,
            fail: reject
        })
    })
}

export default {
    login,
    getUserInfo,
    setStorage,
    getStorage,
    getLocation,
    original: wx
}

