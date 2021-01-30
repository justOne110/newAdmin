//加载path模块
const path = require('path')
//定义resolve方法，把相对路径转换成绝对路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://admintest.happymmall.com',//跨域请求资源地址
                ws: false,//是否启用websockets
                changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/api': ''//注册全局路径
                }
            }
        }
    }
}

