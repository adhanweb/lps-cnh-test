// Confirme com a CNH os valores exatos de utm_source/utm_medium
export function ensureUtm() {
  try {
    const url = new URL(window.location.href);
    const p = url.searchParams;
    if (p.has("utm_source") || p.has("utm_medium") || p.has("utm_campaign")) return;
    p.set("utm_source", "mycnhstore");
    p.set("utm_medium", "organic");
    window.history.replaceState(null, "", url.toString());
  } catch {}
}