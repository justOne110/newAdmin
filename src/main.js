import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false
// 封装后的axios
import axios from './http/http'
Vue.prototype.$axios = axios
// 导入全局样式
import '../src/assets/css/index.scss'

// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.use(VueQuillEditor)




// 全局路由守卫
router.beforeEach((to, from, next) => {



  console.log(to)
  store.commit('setBread',to.meta.bread)
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
