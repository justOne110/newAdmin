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

// 查询
function search(data){
    return Server({
        url:api.search,
        method:"get",
        params:data,
        hideloading:false
    })
}

// 上架下架
function soldOut(data){
    return Server({
        url:api.soldOut,
        method:"get",
        params:data,
        hideloading:false
    })
}

// 详情
function goodDetail(data){
    return Server({
        url:api.goodDetail,
        method:"get",
        params:data,
        hideloading:false
    })
}

// 一级分类
function category(data){
    return Server({
        url:api.category,
        method:"get",
        params:data,
        hideloading:false
    })
}
// 二级分类
function classfiy(data){
    return Server({
        url:api.category,
        method:"get",
        params:data,
        hideloading:false
    })
}
// 二级分类
function classiy(data){
    return Server({
        url:api.category,
        method:"get",
        params:data,
        hideloading:false
    })
}
// 导出封装好的请求函数
export default {
    login,
    loginOut,
    goodList,
    search,
    soldOut,
    goodDetail,
    category,
    classfiy,
function classiy(data){

}
