import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export const routes = {
  home: 'home',
  type: 'type',
  charts: 'charts',
  chartList: 'chartList',
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routes.home,
      component: HomeView,
    },
    {
      path: `/${routes.type}`,
      name: routes.type,
      component: () => import('../views/TypeView.vue'),
    },
  ],
});

export default router;
