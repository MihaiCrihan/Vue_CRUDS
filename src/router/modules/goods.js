export default [
    {
        path: '/goods',
        name: 'Goods',
        component: () => import(/* webpackChunkName: "goods" */ '@/modules/goods/index.vue'),
    },
    {
        path: '/goods/create',
        name: 'Goods create',
        component: () => import(/* webpackChunkName: "goods create" */ '@/modules/goods/create.vue')
    },
    {
        path: '/goods/edit/:id',
        name: 'Goods edit',
        component: () => import(/* webpackChunkName: "goods edit" */ '@/modules/goods/edit.vue')
    },

]