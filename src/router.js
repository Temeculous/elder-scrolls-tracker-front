import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: '/ESGames',
    name: 'ESGames',
    component: () => import('./components/ESGameIndex')
  },
  {
    path: '/ESGames/:id',
    name: 'esgame-details',
    component: () => import('./components/ESGame')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('./components/AddGame')
  }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
