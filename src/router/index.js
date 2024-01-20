import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BestuurView from '../views/BestuurView.vue'
import DirigentView from '../views/DirigentView.vue'
import GeschiedenisView from '../views/GeschiedenisView.vue'
import ActiviteitenView from '../views/ActivityView.vue'
import RepetitiesView from '../views/RepetitiesView.vue'
import RepertoireView from '../views/RepertoireView.vue'
import LidView from '../views/LidView.vue'
import FotoalbumView from '../views/FotoalbumView.vue'

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
    },
    {
      path: '/activiteiten',
      name: 'activiteiten',
      component: ActiviteitenView
    },
    {
      path: '/repetities',
      name: 'repetities',
      component: RepetitiesView
    },
    {
      path: '/repertoire',
      name: 'repertoire',
      component: RepertoireView
    },
    {
      path: '/lidmaatschap',
      name: 'lidmaatschap',
      component: LidView
    },
    {
      path: '/fotoalbum',
      name: 'fotoalbum',
      component: FotoalbumView
    }
  ],
  linkExactActiveClass: 'activeLink',
})

export default router
