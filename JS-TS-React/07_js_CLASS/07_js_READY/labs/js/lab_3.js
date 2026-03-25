import { productsOb, backupRepo } from "./utils.js";

const productsEl = document.getElementById("products");
const countInCart = document.getElementById("count-in-cart");
const sumCart = document.getElementById("sum-cart");
const cartItem = document.getElementById("cart-item");
/* =======================================  */
document.addEventListener("click", addToCart);
document.addEventListener("click", showCart);
document.addEventListener("click", deleteFromCart);
document.addEventListener("blur", changeInCart, true);

function showCart({ target }) {
  const cartOb = backupRepo.get("cart");
  if (!cartOb || !Object.keys(cartOb).length) {
    alert("cart is empty");
    return;
  }

  const cartInDocument = !cartItem.classList.contains("hidden");
  if (cartInDocument) {
    const clickedEl = target.closest(".cart-item");
    if (!clickedEl && !cartItem.classList.contains("hidden")) {
      cartItem.classList.add("hidden");
      return;
    }
  }

  const cartEl = target.closest(".cart");
  if (!cartEl) {
    return;
  }
  cartItem.classList.remove("hidden");
  showCartInfo();
}

function showCartInfo() {
  const cartRender = document.getElementById("cart-render");
  const cartTotal = document.getElementById("cart-total");
  const cartOb = backupRepo.get("cart");
  let out = "";

  out += Object.entries(cartOb)
    .map(
      ([id, qty], i) => `<div class="cart-table">
          <div>${i + 1}</div>
          <div>${productsOb[id].title}</div>
          <div>${productsOb[id].price}</div>
          <div>${(productsOb[id].price * qty).toFixed(2)}</div>
          <div>
            <input type="number" value="${qty}" data-id="${id}" class="js-change-in-cart"/>
          </div>
          <div><button data-id="${id}" class="js-delete-from-cart btn btn-danger btn-small">Delete</button></div>
        </div>`
    )
    .join("");
  cartRender.innerHTML = out;

  const [n, sum] = calculateInCart();
  cartTotal.innerHTML = ` <div class="cart-table">
          <div></div>
          <div>Total</div>
          <div></div>
          <div>${sum}</div>
          <div></div>
        </div>`;
}

function addToCart({ target }) {
  if (!target.classList.contains("js-btn-product")) {
    return;
  }
  const id = target.dataset.id;
  const cartOb = backupRepo.get("cart") || {};

  if (cartOb[id]) {
    cartOb[id]++;
  } else {
    cartOb[id] = 1;
  }
  backupRepo.set(cartOb, "cart");
  showTopInfo();
}

function calculateInCart() {
  if (!backupRepo.has("cart")) {
    return [0, 0];
  }
  const cartOb = backupRepo.get("cart");

  let n = 0;
  for (const id in cartOb) {
    n += cartOb[id];
  }

  let sum = 0;
  for (const id in cartOb) {
    sum += productsOb[id].price * cartOb[id];
  }
  return [n, sum];
}

function showTopInfo() {
  const [n, sum] = calculateInCart();
  countInCart.textContent = n;
  sumCart.textContent = sum;
}

function deleteFromCart({ target }) {
  const cartOb = backupRepo.get("cart");
  if (!target.classList.contains("js-delete-from-cart")) {
    return;
  }
  const id = target.dataset.id;
  if (!cartOb[id]) {
    return;
  }
  delete cartOb[id];
  backupRepo.set(cartOb, "cart");
  showTopInfo();

  if (!Object.keys(cartOb).length) {
    cartItem.classList.add("hidden");
    return;
  }
  showCartInfo();
}

function changeInCart({ target }) {
  if (!target.classList.contains("js-change-in-cart")) {
    return;
  }
  const id = target.dataset.id;
  const value = +target.value;
  const cartOb = backupRepo.get("cart");
  if (!(id in cartOb)) {
    return;
  }
  cartOb[id] = value;
  backupRepo.set(cartOb, "cart");
  showTopInfo();
  showCartInfo();
}

/* =======================================  */
function renderProducts() {
  let out = "";
  for (const key in productsOb) {
    const p = productsOb[key];
    out += `<div class="col-md-3">
          <div class="product-item">
            <h2>${p.title}</h2>
            <p>${p.price}</p>
            <div>
              <button class="js-btn-product btn btn-primary" data-id="${p.id}"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>`;
  }
  return out;
}

productsEl.innerHTML = renderProducts();
showTopInfo();
