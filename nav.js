/* ============================================================
   TECHKITCH — MOBILE NAV (shared across secondary pages)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".js-nav-toggle");
  const nav = document.querySelector(".js-nav");
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove("nav--open");
    toggle.classList.remove("nav-toggle--active");
  };

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    toggle.classList.toggle("nav-toggle--active");
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
});
