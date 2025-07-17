<template>
  <div>
    <h1>User Dashboard</h1>
    <button @click="handleLogout">Logout</button>

    <div v-if="userStore.loading">
      <p>Loading user data...</p>
    </div>

    <div v-else-if="userStore.user">
      <pre>{{ userStore.user }}</pre>
    </div>

    <div v-else>
      <p>You are not logged in. Redirecting...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { onMounted } from 'vue'

const userStore = useUserStore()

async function handleLogout() {
  await userStore.logout()
  window.location.href = "/"
}

onMounted(async () => {
  await userStore.fetchUser()
  if (!userStore.user) {
    window.location.href = "/"
  }
})
</script>
