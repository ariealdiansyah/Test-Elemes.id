
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/tv',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Tv.vue') },
      { path: 'details/:id', component: () => import('pages/Details.vue') }
      // { path: 'details', component: () => import('pages/Details.vue') }
    ]
  },
  {
    path: '/movie',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Movie.vue') },
      { path: 'details/:id', component: () => import('pages/Details.vue') }
      // { path: 'details', component: () => import('pages/Details.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
