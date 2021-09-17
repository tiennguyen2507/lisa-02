import MainApp from '../Main.vue'

const routes = [
  {
    path: '/user-type',
    component: MainApp,
    name: 'user-type',
    children: [
      {
        path: 'create',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-type/pages/create.vue'),
        name: 'user-type-create',
      },
      {
        path: '/',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-type/pages/List.vue'),
        name: 'user-type-list',
      },
      {
        path: 'test',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-type/pages/text.vue'),
        name: 'create',
      },
      // {
      //   path: 'edit/:id',
      //   component: () => import(/* webpackChunkName: "user/projects" */ 'modules/Task/pages/edit.vue'),
      //   name: 'edit',
      // },
    ],
  },
]

export default routes
