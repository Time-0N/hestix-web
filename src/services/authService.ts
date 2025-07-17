export function login() {
  window.location.href = "/api/auth/login";
}

export async function logout() {
  await fetch("/api/auth/logout", { method: "GET", credentials: "include" });
}
