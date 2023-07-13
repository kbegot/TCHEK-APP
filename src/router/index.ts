import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'tchekApp',
      component: () => import('@/views/Home.vue',)
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue',)
    },
    {
      path: '/tchek',
      name: 'tchek',
      component: () => import('@/views/Tchek.vue',)
    },
    {
      path: '/rapport',
      name: 'rapport',
      component: () => import('@/views/Rapport.vue',)
    },
  ]
})

export default router
