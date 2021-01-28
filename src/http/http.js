// 导入封装好的axios
import Server from '../http/request'

// 导入api 接口
import api from '../http/api'


import qs from 'qs'

//登录
function login(data) {
    return Server({
        url: api.login, // 请求地址
        method: "post", // 请求方式
        data: qs.stringify(data), // 请求传递的参数
        hideloading: false // 隐藏 loading 组件
    })
}
// 退出登录
function loginOut(data) {
    return Server({
        url: api.loginOut, // 请求地址
        method: "post", // 请求方式
        data: qs.stringify(data), // 请求传递的参数
        hideloading: false // 隐藏 loading 组件
    })
}
// 商品列表数据
function goodList(data) {
    return Server({
        url: api.goodList, // 请求地址
        method: "get", // 请求方式
        // data: qs.stringify(data), // 请求传递的参数
        params:data,
        hideloading: false // 隐藏 loading 组件
    })
}
// 导出封装好的请求函数
export default {
    login,
    loginOut,
    goodList
}
