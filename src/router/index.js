import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "关于"
    },
    component: () => import('../views/About.vue')

  },
  {
    path: '/system',
    name: 'System',
    meta: {
      title: "招商系统"
    },
    component: () => import('../views/System.vue')

  },
  {
    path: '/help',
    name: 'Help',
    meta: {
      title: "帮助中心"
    },
    component: () => import('../views/Help.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router