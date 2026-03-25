import { getCoords } from "./utils.js";

document.addEventListener("click", handleSocial);

function handleSocial({ target }) {
  const el = target.closest("div[data-href]");
  const isSetDiv = document.getElementById("social-link");

  if (el === null && isSetDiv !== null) {
    isSetDiv.parentNode.removeChild(isSetDiv);
    return;
  }

  if (el !== null) {
    const href = el.dataset.href;

    if (isSetDiv !== null) {
      const isSetHref = isSetDiv.getAttribute("href");
      isSetDiv.parentNode.removeChild(isSetDiv);
      if (href === isSetHref) {
        return;
      }
    }

    const coords = getCoords(el);
    const a = createLink(href);
    a.style.left = coords.left + coords.width / 2 - a.offsetWidth / 2 + "px";
    a.style.top = coords.top - a.offsetHeight / 2 - 10 + "px";
  }
}

function createLink(href) {
  const a = document.createElement("a");
  a.id = "social-link";
  a.classList.add("socialDiv");
  a.href = href;
  a.target = "_blank";
  a.textContent = "Перейти";
  document.body.appendChild(a);
  return a;
}
