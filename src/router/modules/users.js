export default [
    {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "users" */ '@/modules/users/index.vue')
    },
    {
        path: '/users/create',
        name: 'Users create',
        component: () => import(/* webpackChunkName: "users create" */ '@/modules/users/create.vue')
    },
    {
        path: '/users/edit/:id',
        name: 'Users edit',
        component: () => import(/* webpackChunkName: "users edit" */ '@/modules/users/edit.vue')
    },
]