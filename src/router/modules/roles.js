export default [
    {
        path: '/roles',
        name: 'Roles',
        component: () => import(/* webpackChunkName: "roles" */ '@/modules/roles/index.vue')
    },
    {
        path: '/roles/create',
        name: 'Roles Create',
        component: () => import(/* webpackChunkName: "roles create" */ '@/modules/roles/create.vue')
    },
    {
        path: '/roles/edit/:id',
        name: 'Roles Edit',
        component: () => import(/* webpackChunkName: "roles edit" */ '@/modules/roles/edit')
    }
]