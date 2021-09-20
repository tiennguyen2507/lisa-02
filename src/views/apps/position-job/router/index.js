import MainApp from '../Main.vue'

const routes = [
  {
    path: '/position-job',
    component: MainApp,
    name: 'position-job',
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/position-job/pages/Main.vue'),
        name: 'home',
      },
      {
        path: 'add',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/position-job/pages/Add.vue'),
        name: 'add',
      },
      {
        path: 'edit',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/position-job/pages/Edit.vue'),
        name: 'edit',
      },
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/position-job/pages/List.vue'),
        name: 'list',
      },
      {
        path: 'ListMore',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/position-job/pages/ListMore.vue'),
        name: 'ListMore',
      },
      // {
      //   path: 'create',
      //   component: () => import(/* webpackChunkName: "user/projects" */ 'modules/Task/pages/create.vue'),
      //   name: 'create',
      // },
      // {
      //   path: 'edit/:id',
      //   component: () => import(/* webpackChunkName: "user/projects" */ 'modules/Task/pages/edit.vue'),
      //   name: 'edit',
      // },
    ],
  },
]

export default routes
