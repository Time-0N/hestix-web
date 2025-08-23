import type { Router } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

export default (router: Router) => {
  let bootstrapped = false;

  router.beforeEach(async (to, _from, next) => {
    const store = useUserStore();

    if (!bootstrapped) {
      bootstrapped = true;
      if (!store.user && !store.loading) {
        try { await store.fetchUser(); } catch {}
      }
    }

    if (to.meta.requiresAuth && !store.user) {
      return next({ name: 'home' });
    }
    next();
  });
};
