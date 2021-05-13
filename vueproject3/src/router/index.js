import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import  A from '../components/A.vue'
import  B from '../components/B.vue'
import  A1 from '../components/A1.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {

    path: '/a',
    name: 'A',
    component: A,
    //子路由
    children:[ {
      path: '/a1',
      name: 'A1',
      component: A1,
    } ]
  },
  {
    path: '/b',
    name: 'B',
    component: B
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
/*
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a',
    name: 'A',
    component: A,
  },
  {
    path: '/b',
    name: 'B',
    component: B
  },
  {
    path: '/a1',
    name: 'A1',
    component: A1,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]
*/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/a',
        name: 'A',
        component: A,
      },
      {
        path: '/b',
        name: 'B',
        component: B
      },
      {
        path: '/a1',
        name: 'A1',
        component: A1,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
