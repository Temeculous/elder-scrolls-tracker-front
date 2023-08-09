import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/ESGames',
    name: 'ESGames',
    component: () => import('./components/ESGameIndex')
  },
  {},
  {}
]
