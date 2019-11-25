import fetch from './fetch'
const URI = 'https://douban-api.uieee.com/v2/movie'

/**
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */

function fetchApi(type, params) {
    return fetch(URI, type, params)
}

/**
 *
 * @param {*} type 类型
 * @param {number} [page=1] 页面
 * @param {number} [count=20] 页条数
 * @param {string} [search=''] 搜索关键词
 */

async function find(type, page = 1, count = 20, search = '') {
    console.log(getApp().data);
    const params = { start: (page - 1) * count, count: count, city: getApp().data.currentCity }
    console.log(params);
    const res = await fetchApi(type, search ? Object.assign(params, { q: search }) : params)
    return res.data
}

/**
 * @param {*} id 电影的ID
 * @returns
 */
async function findOne(id) {
    const res = await fetchApi('subject/' + id)
    return res.data
}

module.exports = {
    find,
    findOne
}
