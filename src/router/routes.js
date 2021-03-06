
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/history', component: () => import('pages/History.vue') },
      { path: '/service', component: () => import('pages/Service.vue') },
      { path: '/team', component: () => import('pages/Team.vue') },
      { path: '/testing', component: () => import('pages/testing.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
