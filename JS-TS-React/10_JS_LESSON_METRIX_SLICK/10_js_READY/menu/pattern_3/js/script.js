const menu = $("#menu");
const darkOverlay = $("#dark-overlay");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".mobile-menu .is-submenu", handleToggleMenu);

function handleMenu() {
  darkOverlay.toggleClass("visible");
  menu.toggleClass("visible");
}
function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
}

function resetMobileMenu() {
  darkOverlay.removeClass("visible");
  menu.removeClass("visible");
  menu
    .find(".has-submenu")
    .removeClass("opened")
    .find("ul")
    .removeAttr("style");
}

/* ==================  */
function initMobile() {
  console.log("is-mobile");
  menu.addClass("mobile-menu");
}

function initDesktop() {
  console.log("is-desktop");
  menu.removeClass("mobile-menu");
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
