export async function getCurrentUser() {
  const response = await fetch("/api/user/me", { credentials: "include" });
  if (!response.ok) return null;
  return await response.json();
}
