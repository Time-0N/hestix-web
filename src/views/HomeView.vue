<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

const store = useUserStore();

onMounted(() => {
  // first thing after landing back from callback
  store.fetchUser();
});

const isAuthed = computed(() => store.user !== null);

function handleLogin() {
  store.login(); // don't push(), this navigates to /api/auth/login
}

async function handleLogout() {
  await store.logout();
}
</script>

<template>
  <main class="home">
    <section v-if="store.loading">
      <p>Loading…</p>
    </section>

    <section v-else-if="!isAuthed">
      <h2>Welcome</h2>
      <button @click="handleLogin">Log in</button>
    </section>

    <section v-else>
      <h2>Hi {{ store.user?.username || store.user?.email || 'user' }}</h2>
      <pre style="white-space: pre-wrap">{{ store.user }}</pre>
      <button @click="handleLogout">Log out</button>
    </section>
  </main>
</template>
