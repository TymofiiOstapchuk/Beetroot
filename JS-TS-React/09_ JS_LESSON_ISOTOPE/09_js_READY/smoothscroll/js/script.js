const scroll = new SmoothScroll('a[href*="#"]', {
  header: "[data-scroll-header]",
});
const navItems = document.querySelectorAll(".nav__item");

document.addEventListener("scrollStop", HandleStopScroll);

function HandleStopScroll(e) {
  const targetEl = e.detail.anchor;
  const link = e.detail.toggle;
  navItems.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");

  targetEl.firstElementChild.classList.add("pulse");
  setTimeout(() => {
    targetEl.firstElementChild.classList.remove("pulse");
  }, 3000);
}
