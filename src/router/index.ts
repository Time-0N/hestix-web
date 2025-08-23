import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import authGuard from './guards/auth';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/dashboard", component: DashboardView }
  ],
});

authGuard(router);

export default router
