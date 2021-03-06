
/**
 * 封装 请求
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */

export default function (api, path, params) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${api}/${path}`,
            data: Object.assign({}, params),
            header: { 'Content-Type': 'json' },
            success: resolve,
            fail: reject
        })
    })
}