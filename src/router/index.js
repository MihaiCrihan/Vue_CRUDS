import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "about" */ '../modules/Goods/index.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../modules/Orders/index.vue')
  },
  {
    path: '/roles',
    name: 'Roles',
    component: () => import(/* webpackChunkName: "about" */ '../modules/Roles/index.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "about" */ '../modules/Users/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
