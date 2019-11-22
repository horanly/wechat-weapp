import fetch from './fetch'
const URI = 'https://api.map.baidu.com'

/**
 * @param {*} type   类型
 * @param {*} params 参数
 * @returns
 */
function fetchApi(type, params) {
    return fetch(URI, type, params)
}

/**
 * 根据经纬度获取城市名称
 *
 * @param {number} [latitude=39.90403]
 * @param {number} [longitude=116.407526]
 */
async function getCityName(latitude = 39.90403, longitude = 116.407526) {
    const params = {
        location: `${latitude},${longitude}`,
        output: 'json',
        ak: 'B61195334f65b9e4d02ae75d24fa2c53'
    }
    const res = await fetchApi('geocoder/v2/', params)
    return res.data.result.addressComponent.city
}

module.exports = {
    getCityName
}