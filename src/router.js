import { createWebHistory, createRouter } from 'vue-router'
import ESGame from './components/ESGame.vue'
import ESGameIndex from './components/ESGameIndex.vue'
import AddGame from './components/AddGame.vue'

const routes = [
  {
    path: '/',
    alias: '/ESGames',
    name: 'ESGames',
    component: ESGameIndex
  },
  {
    path: '/ESGames/:id',
    name: 'esgame-details',
    component: ESGame,
    props: true
  },
  {
    path: '/new',
    name: 'new',
    component: AddGame
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
