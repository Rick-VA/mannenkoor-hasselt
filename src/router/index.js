import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BestuurView from '../views/BestuurView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bestuur',
      name: 'bestuur',
      component: BestuurView
    }
  ],
  linkExactActiveClass: 'activeLink',
})

export default router
