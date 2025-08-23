export async function getCurrentUser() {
  const res = await fetch('/api/user/me', {
    credentials: 'include',
    headers: { Accept: 'application/json' },
    cache: 'no-store',                    // avoid a cached 401 after login
  });
  if (res.status === 401 || res.status === 403 || res.status === 404) return null; // treat 403 as unauth (role gate)
  if (!res.ok) throw new Error(`getCurrentUser failed: ${res.status}`);
  return res.json();
}
