import { getCoords } from "./utils.js";

document.addEventListener("click", handleTip);

function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}

function handleTip({ target: el }) {
  const delEl = document.querySelector(".tip");
  if (isInPage(delEl)) {
    delEl.parentNode.removeChild(delEl);
  }

  if (!el.classList.contains("el-box")) {
    return;
  }
  if (document.getElementById(el.id + "-tip")) {
    return;
  }

  const { top, left, width, height } = getCoords(el);
  const tip = createTip(el);

  document.body.appendChild(tip);

  const tipHeight = tip.offsetHeight;
  const tipWidth = tip.offsetWidth;

  tip.style.left = left + width / 2 - tipWidth / 2 + "px";
  tip.style.top = top - tipHeight + "px";
}

function createTip(el) {
  const tip = document.createElement("div");
  tip.classList.add("tip");
  tip.textContent = el.dataset.tip;
  tip.id = el.id + "-tip";
  return tip;
}
