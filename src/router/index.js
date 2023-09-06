import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/p/:url',
      name: 'profile',
      component: () => import('../views/RedirectView.vue')
    }
  ]
})

export default router
