import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import goods from '@/router/modules/goods.js'
import orders from '@/router/modules/orders.js'
import users from "@/router/modules/users";
import roles from "@/router/modules/roles";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    ...goods,
    ...orders,
    ...users,
    ...roles
]

const router = new VueRouter({
    routes
})

export default router
