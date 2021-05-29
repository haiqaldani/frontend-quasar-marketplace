const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/sign-in',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/SignIn.vue') }
    ]
  },
  {
    path: '/sign-up',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/SignUp.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ]
  },
  {
    path: '/Detail',
    component: () => import('layouts/Product.vue'),
    children: [
      { path: '', component: () => import('pages/Detail.vue') }
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
