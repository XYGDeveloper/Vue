import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'
// import Detail from '../views/Detail.vue'
//path 路径
//name 名称
//component 组建
//routes 路由数组
//第一种通过头文件导入并配置如下
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  //第二种通过按需导入并配置如下
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    component: () => import('../views/About.vue')
  },
  // {
  //   path:'/detail',
  //   name:"Detail",
  //   component:Detail
  // },
  {
    path:'/detail',
    name:"Detail",
    component:()=>import('../views/Detail.vue')
  }
]

//创建陆游，创建的方式是createWebHistory            /about
//创建陆游，创建的方式是createWebHashHistory        #/about
//把路由数组传递到对象里面去
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
