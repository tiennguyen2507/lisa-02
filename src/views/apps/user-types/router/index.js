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
        path: 'position-job',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/Position-job.vue'),
        name: 'position-job',
      },
      {
        path: 'add-job-position',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/Add-job-position.vue'),
        name: 'add-job-position',
      },
      {
        path: 'position-job-list',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/Position-job-list.vue'),
        name: 'position-job-list',
      },
      {
        path: 'List-more-job-positions',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/List-more-job-positions.vue'),
        name: 'List-more-job-positions',
      },
      {
        path: 'Vuex-action',
        component: () => import(/* webpackChunkName: "user/projects" */ '@/views/apps/user-types/pages/Vuex-action.vue'),
        name: 'Vuex-action',
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
