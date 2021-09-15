import MainApp from '../Main.vue'

const routes = [
  {
    path: '/user-type',
    component: MainApp,
    name: 'user-type',
    children: [
      {
        path: 'create',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/create.vue'),
        name: 'user-type-create',
      },
      {
        path: 'tiennguyen',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/Tiennguyen.vue'),
        name: 'tiennguyen',
      },
      {
        path: 'addwork',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/AddWork.vue'),
        name: 'myPagination',
      },
      {
        path: 'listwork',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/ListWork.vue'),
        name: 'listwork',
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
