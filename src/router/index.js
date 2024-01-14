import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main.vue')
    },
    {
      path: '/fantasy',
      name: 'fantasy',      
      component: () => import('../views/Fantasy.vue')
    },
    {
      path: '/rpg',
      name: 'rpg',      
      component: () => import('../views/RPG.vue')
    },
    {
      path: '/shooter',
      name: 'shooter',      
      component: () => import('../views/Shooter.vue')
    },
    {
      path: '/royal',
      name: 'royal',      
      component: () => import('../views/Royal.vue')
    },
    {
      path: '/strategy',
      name: 'strategy',      
      component: () => import('../views/Strategy.vue')
    },
    {
      path: '/details/:id',
      name: 'details',      
      component: () => import('../views/Details.vue')
    },
    
  ]
})

export default router
