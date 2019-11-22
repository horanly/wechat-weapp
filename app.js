/**
 * WeChat API 模块
 * @type {Object}
 * 
 */
import wechat from './utils/wechat'

/**
 * DouBan API 模块
 * @type {Object}
 * 
 */
import douban from './utils/douban'

/**
 * Baidu API 模块
 * @type {Object}
 * 
 */
import baidu from './utils/baidu'

App({
  /**
   * Global
   * 定义成员，在整个应用中共享
   */
  data: {
    name: 'Douban Weapp',
    version: '0.1.0',
    currentCity: '北京'
  },

  /**
   * WeChat API
   */
  wechat: wechat,
  /**
   * DouBan API
   */
  douban: douban,
  /**
   * Baidu API
   */
  baidu: baidu,

  /**
   * 生命周期函数-监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch (全局只触发一次)
   */
  onLaunch() {
    wechat.getLocation().then(res => {
      const { latitude, longitude } = res
      return baidu.getCityName(latitude, longitude)
    }).then(name => {
      this.data.currentCity = name.replace('市', '')
      console.log('currentCity:', this.data.currentCity)
    }).catch(err => {
      this.data.currentCity = '北京'
      console.log(err)
    })
  }
})