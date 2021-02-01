import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录页
  {
    path: '/',
    name: 'login',
    component: () => import('views/login.vue')
  },
  // 主页面
  {
    redirect:"/index",
    path: "/home",
    name: "home",
    component: () => import('views/home.vue'),
    meta: {
      keepAlive: false,
    },
    children:[
      // home
      {
        path: '/index',
        name: 'index',
        component: () => import('views/index.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"Home"}
          ]
        }
      },
      // 商品管理
      {
        path: '/good',
        name: 'good',
        component: () => import('views/good.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"商品管理"}
          ]
        }
      },
      // 商品详情
      {
        path: '/good/detail',
        name: 'goodDetail',
        component: () => import('views/detail.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"商品管理"}
          ]
        }
      },
      // 商品编辑
      {
        path: '/good/complice',
        name: 'goodComplice',
        component: () => import('views/complice.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"商品管理"},
            {name:"修改商品"}
          ]
        }
      },
      // 添加商品
      {
        path: '/good/add',
        name: 'goodAdd',
        component: () => import('views/addgoods.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"商品管理"},
            {name:"添加商品"}
          ]
        }
      },
      // 品类管理
      {
        path: '/category',
        name: 'category',
        component: () => import('views/category.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"品类管理"}
          ]
        }
      },
      // 订单管理
      {
        path: '/order',
        name: 'order',
        component: () => import('views/order.vue'),
        meta:{
          keepAlive:false,
          bread:[
            {name:"订单管理"}
          ]
        }
      },
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
