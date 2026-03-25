const menuButton = $("#menu-button");
const mobileMenuContainer = $("#mobile-menu-container");

$(document).on("click", "#menu-button", handleMenu);

function handleMenu(e) {
  e.preventDefault();
  $(this).toggleClass("active");
  mobileMenuContainer.slideToggle();
}

function resetMobileMenu() {
  menuButton.removeClass("active");
  mobileMenuContainer.hide();
}

/* =====================  */
function initMobile() {
  console.log("is-mobile");
}

function initDesktop() {
  console.log("is-desktop");
  resetMobileMenu();
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 900px)",
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 900px)",
  onEnter: function () {
    initDesktop();
  },
});
