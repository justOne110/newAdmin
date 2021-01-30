//1. 导入axios
import axios from 'axios'
// 根据环境不同引入不同baseApi地址
// import { baseApi } from '@/config'
// 导入loading
import { Loading } from 'element-ui';

let loadingInstance; // 创建loading变量
// 2. 创建axios实例
const Server = axios.create({
    baseURL: "/api", // 基础url地址
    timeout: 3000, // 请求超时时间
    withCredentials: true,
})

//3. 请求拦截器配置
Server.interceptors.request.use((config) => {

    // 不传递默认开启loading
    if (!config.hideloading) {
        loadingInstance = Loading.service({ fullscreen: true });
    }


    // 可以在请求拦截里配置header头，携带token
    // 先获取本地存储,我的token是存储在sessionStorage
    // let token ='Bearer '+ sessionStorage.getItem('token')
    // 	if(token){
    // 		config.headers['authorization'] = token
    // 	}
    return config;

}, (error) => {
    return Promise.reject(error);
});
//4. 相应拦截器
Server.interceptors.response.use((response) => {
    // 关闭loding
    loadingInstance.close();

    //过滤返回的data值
    if (response.status == 200) {
        // return response.data;
        return response;
    }

    return response;
}, (error) => {

    return Promise.reject(error);
});

//5. 抛出对象接口
export default Server;
