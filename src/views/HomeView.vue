<template>
  <div>
    <h1>Welcome to Hestix</h1>
    <p v-if="userStore.loading">Checking login status...</p>
    <div v-else>
      <p v-if="!userStore.user">You are not logged in.</p>
      <p v-else>Redirecting to your dashboard...</p>
      <button v-if="!userStore.user" @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { onMounted } from 'vue'

const userStore = useUserStore()

async function handleLogin() {
  const success = await userStore.login()
  if (success) {
    window.location.href = "/dashboard"
  }
}

onMounted(async () => {
  await userStore.fetchUser()
  if (userStore.user) {
    window.location.href = "/dashboard"
  }
})
</script>
