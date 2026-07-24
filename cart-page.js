/* ============================================================
   TECHKITCH — FULL CART PAGE
   ============================================================ */

function renderCartPage() {
  const tbody = document.querySelector(".js-cart-table-body");
  const summary = document.querySelector(".js-cart-summary");
  const empty = document.querySelector(".js-cart-empty");
  const layout = document.querySelector(".js-cart-layout");
  if (!tbody) return;

  const { items, subtotal, shipping, tax, total } = getCartDetails();

  if (items.length === 0) {
    if (layout) layout.style.display = "none";
    if (empty) empty.style.display = "block";
    return;
  }
  if (layout) layout.style.display = "grid";
  if (empty) empty.style.display = "none";

  tbody.innerHTML = items
    .map(
      (i) => `
    <tr>
      <td>
        <div class="product-cell">
          <img src="${i.image}" alt="${i.name}" />
          <div>
            <h4>${i.name}</h4>
            <p>${i.category}</p>
          </div>
        </div>
      </td>
      <td class="price-tag">${formatMoney(i.price)}</td>
      <td>
        <div class="qty-control">
          <button data-decr="${i.id}" aria-label="Decrease quantity">−</button>
          <span>${i.qty}</span>
          <button data-incr="${i.id}" aria-label="Increase quantity">+</button>
        </div>
      </td>
      <td class="price-tag">${formatMoney(i.lineTotal)}</td>
      <td><button class="cart-line__remove" data-remove="${i.id}">Remove</button></td>
    </tr>`
    )
    .join("");

  if (summary) {
    summary.innerHTML = `
      <div class="summary-row"><span>Subtotal</span><span>${formatMoney(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? "Free" : formatMoney(shipping)}</span></div>
      ${tax > 0 ? `<div class="summary-row"><span>Tax</span><span>${formatMoney(tax)}</span></div>` : ""}
      <div class="summary-row summary-row--total"><span>Total</span><span>${formatMoney(total)}</span></div>
      <a href="checkout.html" class="btn btn--primary btn--full">Proceed to checkout</a>
      <a href="index.html" class="btn btn--outline btn--full" style="margin-top:10px;">Continue shopping</a>
      ${subtotal < (STORE_SETTINGS.freeShippingThreshold || 2000) ? `<p style="font-size:0.8rem;color:var(--muted);margin-top:14px;text-align:center;">Add ${formatMoney((STORE_SETTINGS.freeShippingThreshold || 2000) - subtotal)} more for free shipping.</p>` : ""}
    `;
  }

  tbody.querySelectorAll("[data-incr]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.incr);
      const item = getCart().find((i) => i.id === id);
      setQty(id, (item?.qty || 0) + 1);
      renderCartPage();
    })
  );
  tbody.querySelectorAll("[data-decr]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.decr);
      const item = getCart().find((i) => i.id === id);
      setQty(id, (item?.qty || 0) - 1);
      renderCartPage();
    })
  );
  tbody.querySelectorAll("[data-remove]").forEach((btn) =>
    btn.addEventListener("click", () => {
      removeFromCart(Number(btn.dataset.remove));
      renderCartPage();
    })
  );
}

document.addEventListener("DOMContentLoaded", renderCartPage);
