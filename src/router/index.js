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
    component: () => import(/* webpackChunkName: "goods" */ '../modules/goods/index.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */ '../modules/orders/index.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../modules/users/index.vue')
  },
  {
    path: '/users/create',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users create" */ '../modules/users/create.vue')
  },
  {
    path: '/users/edit/:id',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users create" */ '../modules/users/edit.vue')
  },
  {
    path: '/roles',
    name: 'Roles',
    component: () => import(/* webpackChunkName: "roles" */ '../modules/roles/index.vue')
  },
  {
    path: '/roles/create',
    name: 'Roles Create',
    component: () => import(/* webpackChunkName: "roles create" */ '../modules/roles/components/create.vue')
  },
  {
    path: '/roles/edit/:id',
    name: 'Roles Edit',
    component: () => import(/* webpackChunkName: "roles edit" */ '../modules/roles/components/edit')
  }
]

const router = new VueRouter({
  routes
})

export default router
