import { getCoords } from "./utils.js";

const menu = document.querySelector(".menu");

const { right: menuRight } = getCoords(menu);

document.querySelectorAll(".submenu_level2").forEach((item) => {
  const { right } = getCoords(item);
  if (right > menuRight) {
    item.style.right = 0;
  } else {
    item.style.left = 0;
  }
  item.classList.add("hide");
});
