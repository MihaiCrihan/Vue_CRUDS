export default [
    {
        path: '/orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/modules/orders/index.vue')
    },
    {
        path: '/orders/create',
        name: 'Orders Create',
        component: () => import(/* webpackChunkName: "orders create" */ '@/modules/orders/create.vue')
    },
    {
        path: '/orders/edit/:id',
        name: 'Orders Edit',
        component: () => import(/* webpackChunkName: "orders edit" */ '@/modules/orders/edit.vue')
    },
]