import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

// 导入 element-ui
import ElementUI from 'element-ui'
// 导入 element-ui 的样式
import 'element-ui/lib/theme-chalk/index.css';
// use一下
Vue.use(ElementUI)

// 导入全局初始化样式
import '@/assets/index.css'

// 导入
import VueRouter from 'vue-router'
// use
Vue.use(VueRouter)
// 导入 需要通过路由管理的组件
import discovery from '@/views/discovery.vue'
import playlists from '@/views/playlists.vue'
import songs from '@/views/songs.vue'
import mvs from '@/views/mvs.vue'
import result from '@/views/result.vue'
// 创建路由
let router = new VueRouter({
  routes:[
    // 配置地址 和 组件的对应关系
    {
      // 地址
      path:"/discovery",
      // 组件
      component:discovery
    },
    {
      // 地址 空地址 
      path:"/",
      // 组件
      component:discovery
    },
    {
      // 地址
      path:"/playlists",
      // 组件
      component:playlists
    },
    {
      // 地址
      path:"/songs",
      // 组件
      component:songs
    },
    {
      // 地址
      path:"/mvs",
      // 组件
      component:mvs
    },
    {
      // 地址
      path:"/result",
      // 组件
      component:result
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
