/* ============================================================
   TECHKITCH — CART DRAWER (slide-out panel, all pages)
   ============================================================ */

function ensureDrawerDOM() {
  if (!document.querySelector(".js-cart-drawer")) {
    let backdrop = document.querySelector(".js-drawer-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "cart-drawer__backdrop js-drawer-backdrop";
      document.body.appendChild(backdrop);
    }

    const drawer = document.createElement("aside");
    drawer.className = "cart-drawer js-cart-drawer";
    drawer.innerHTML = `
      <div class="cart-drawer__head">
        <h3 style="margin:0; font-size:1.15rem; color:#FFFFFF;">Your Cart</h3>
        <button class="js-drawer-close icon-btn" aria-label="Close cart" style="border:none; color:#FFFFFF; background:transparent; font-size:1.2rem; cursor:pointer;">✕</button>
      </div>
      <div class="cart-drawer__items js-drawer-items"></div>
      <div class="cart-drawer__foot js-drawer-foot"></div>
    `;
    document.body.appendChild(drawer);
  }
}

function renderDrawer() {
  ensureDrawerDOM();
  const body = document.querySelector(".js-drawer-items");
  const foot = document.querySelector(".js-drawer-foot");
  if (!body) return;

  const { items, subtotal, shipping, tax, total, itemCount } = getCartDetails();

  if (items.length === 0) {
    body.innerHTML = `
      <div class="cart-empty" style="text-align: center; padding: 60px 20px;">
        <svg style="width: 48px; height: 48px; margin: 0 auto 16px; color: #737373;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>
        </svg>
        <p style="color: #A3A3A3; font-size: 1rem; margin-bottom: 20px;">Your cart is empty.</p>
        <a href="index.html#shop" class="btn btn--primary btn--sm js-drawer-close" style="display: inline-flex;">Start shopping</a>
      </div>`;
    if (foot) {
      foot.style.display = "none";
      foot.innerHTML = "";
    }
    return;
  }

  if (foot) foot.style.display = "block";

  body.innerHTML = items
    .map(
      (i) => `
      <div class="cart-line" style="display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px dashed rgba(255,255,255,0.12); align-items: center;">
        <img src="${i.image}" alt="${i.name}" style="width: 64px; height: 64px; border-radius: 8px; object-fit: contain; background: #181818; flex-shrink: 0;" />
        <div class="cart-line__info" style="flex: 1; min-width: 0;">
          <div class="cart-line__name" style="font-weight: 600; font-size: 0.92rem; margin-bottom: 6px; color: #FFFFFF; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${i.name}</div>
          <div class="qty-control" style="display: inline-flex; align-items: center; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; overflow: hidden;">
            <button data-decr="${i.id}" aria-label="Decrease quantity" style="width: 28px; height: 28px; border: none; background: #181818; color: #FFFFFF; cursor: pointer; font-size: 1rem;">−</button>
            <span style="width: 28px; text-align: center; font-family: var(--font-mono); font-size: 0.85rem; color: #FFFFFF;">${i.qty}</span>
            <button data-incr="${i.id}" aria-label="Increase quantity" style="width: 28px; height: 28px; border: none; background: #181818; color: #FFFFFF; cursor: pointer; font-size: 1rem;">+</button>
          </div>
          <button class="cart-line__remove" data-remove="${i.id}" style="font-size: 0.78rem; color: #EF4444; border: none; background: none; margin-left: 12px; cursor: pointer;">Remove</button>
        </div>
        <div class="price-tag" style="font-family: var(--font-mono); font-weight: 700; font-size: 0.95rem; color: #FFFFFF; flex-shrink: 0;">${formatMoney(i.lineTotal)}</div>
      </div>`
    )
    .join("");

  if (foot) {
    foot.innerHTML = `
      <div class="summary-row" style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #A3A3A3; font-size: 0.9rem;"><span>Subtotal</span><span>${formatMoney(subtotal)}</span></div>
      <div class="summary-row" style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #A3A3A3; font-size: 0.9rem;"><span>Shipping</span><span>${shipping === 0 ? "Free" : formatMoney(shipping)}</span></div>
      ${tax > 0 ? `<div class="summary-row" style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #A3A3A3; font-size: 0.9rem;"><span>Tax</span><span>${formatMoney(tax)}</span></div>` : ""}
      <div class="summary-row summary-row--total" style="display: flex; justify-content: space-between; margin: 12px 0 16px; font-weight: 700; font-size: 1.15rem; color: #FFFFFF;"><span>Total</span><span>${formatMoney(total)}</span></div>
      <a href="checkout.html" class="btn btn--primary btn--full">Checkout (${itemCount})</a>
      <a href="cart.html" class="btn btn--outline btn--full" style="margin-top:10px;">View full cart</a>`;
  }

  body.querySelectorAll("[data-incr]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.incr);
      const item = getCart().find((i) => i.id === id);
      setQty(id, (item?.qty || 0) + 1);
      renderDrawer();
      if (typeof renderCartPage === "function") renderCartPage();
    })
  );
  body.querySelectorAll("[data-decr]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.decr);
      const item = getCart().find((i) => i.id === id);
      setQty(id, (item?.qty || 0) - 1);
      renderDrawer();
      if (typeof renderCartPage === "function") renderCartPage();
    })
  );
  body.querySelectorAll("[data-remove]").forEach((btn) =>
    btn.addEventListener("click", () => {
      removeFromCart(Number(btn.dataset.remove));
      renderDrawer();
      if (typeof renderCartPage === "function") renderCartPage();
    })
  );
}

function openDrawer() {
  ensureDrawerDOM();
  renderDrawer();

  // Close mobile navigation drawer if active
  const nav = document.querySelector(".js-nav");
  const toggle = document.querySelector(".js-nav-toggle");
  if (nav) nav.classList.remove("nav--open");
  if (toggle) toggle.classList.remove("nav-toggle--active");

  const drawer = document.querySelector(".js-cart-drawer");
  const backdrop = document.querySelector(".js-drawer-backdrop");

  if (drawer) drawer.classList.add("cart-drawer--open");
  if (backdrop) backdrop.classList.add("cart-drawer__backdrop--visible");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.querySelector(".js-cart-drawer")?.classList.remove("cart-drawer--open");
  document.querySelector(".js-drawer-backdrop")?.classList.remove("cart-drawer__backdrop--visible");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  ensureDrawerDOM();

  document.body.addEventListener("click", (e) => {
    const openBtn = e.target.closest(".js-open-cart");
    if (openBtn) {
      e.preventDefault();
      openDrawer();
      return;
    }

    if (e.target.closest(".js-drawer-close") || e.target.closest(".js-drawer-backdrop")) {
      closeDrawer();
    }
  });

  renderDrawer();
});
