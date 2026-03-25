document.addEventListener("click", handleOpenContent);

function handleOpenContent(e) {
  e.preventDefault();
  const { target } = e;
  const openId = target.dataset.openid;
  if (!openId) {
    return;
  }
  const nextEl = target.nextElementSibling;
  const hiddenEl = document.getElementById(openId);
  nextEl.classList.toggle("hidden");
  hiddenEl.classList.toggle("hidden");

  target.textContent = nextEl.classList.contains("hidden")
    ? "open more"
    : "close more";
}

/* ==============================  */

const d = new Date();
document.getElementById("show-year").innerHTML = d.getFullYear();
