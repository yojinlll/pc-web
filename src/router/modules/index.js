const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
        },
      },
      {
        path: 'trade',
        name: 'trade',
        component: () => import('@/views/trade/index.vue'),
        meta: {
          title: '场外交易',
        },
      },
      {
        path: 'assets',
        name: 'assets',
        component: () => import('@/views/assets/index.vue'),
        meta: {
          title: '资产',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
    ]
  }
]

export default routes
