const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children:[
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
    ]
  }
]

export default routes
