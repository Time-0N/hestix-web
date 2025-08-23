export function login() {
  window.location.href = '/api/auth/login';          // top-level nav via proxy
}

export async function logout() {
  await fetch('/api/auth/logout', { method: 'GET', credentials: 'include' });
}
