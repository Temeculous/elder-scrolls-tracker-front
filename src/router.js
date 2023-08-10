import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: '/ESGames',
    name: 'ESGames',
    component: () => import('./components/ESGameIndex.vue')
  },
  {
    path: '/ESGames/:id',
    name: 'esgame-details',
    component: () => import('./components/ESGame.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('./components/AddGame.vue')
  }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
