import { getCurrentUser } from '@/services/userService.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login as loginService, logout as logoutService } from '@/services/authService';
import type { User } from '@/user.ts'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const loading = ref(false)

  async function fetchUser() {
    loading.value = true
    try {
      user.value = await getCurrentUser()
    } catch (e) {
      console.error("Failed to fetch user:", e)
      user.value = null
    } finally {
      loading.value = false
    }
  }

  async function login(): Promise<boolean> {
    try {
      loginService()
      await fetchUser()
      return user.value !== null
    } catch (e) {
      console.error("Login failed:", e)
      return false
    }
  }

  async function logout() {
    try {
      await logoutService()
    } catch (e) {
      console.error("Logout failed:", e);
    } finally {
      user.value = null;
    }
  }

  const isAuthenticated = () => user.value !== null

  return { user, loading, fetchUser, login, logout, isAuthenticated }
})
