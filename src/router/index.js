import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BestuurView from '../views/BestuurView.vue'
import DirigentView from '../views/DirigentView.vue'
import GeschiedenisView from '../views/GeschiedenisView.vue'

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
    },
    {
      path: '/dirigent',
      name: 'dirigent',
      component: DirigentView
    },
    {
      path: '/geschiedenis',
      name: 'geschiedenis',
      component: GeschiedenisView
    }
  ],
  linkExactActiveClass: 'activeLink',
})

export default router
