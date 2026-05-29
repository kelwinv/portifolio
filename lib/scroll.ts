export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  history.replaceState(null, "", `#${id}`);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}
