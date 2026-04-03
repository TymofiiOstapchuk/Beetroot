//menu
const menuButton = $(".menu-button");
const overlayNavigation = $(".overlay-navigation");
menuButton.on("click", handleMenu);
function handleMenu(e) {
  e.preventDefault();
  overlayNavigation.toggleClass("visible");
}

//scroll
$(document).ready(function () {
  function scrollToSection(selector, duration) {
    $(selector).on("click", "a", function (e) {
      e.preventDefault();
      const id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body, html").animate({ scrollTop: top }, duration);
    });
  }

  scrollToSection("#btn-head", 2500);
  scrollToSection("#btn-feat", 1500);
});

//first slider
$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotsClass: "dots-style",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 688,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//second slider
$(".autoplay").slick({
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 688,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//counter + button
$(function () {
  $(".list__button").click(function () {
    $(this).find(".list__button-add").text("View cart");
  });
});

let cartItemCount = 0;
$(function () {
  $(".list__button").click(function () {
    cartItemCount++;
    $(".header__basket text").text(cartItemCount);
  });
});

//contact form
$(function () {
  $("#contact").click(function () {
    $("#contactForm").fadeToggle();
    $("body").toggleClass("lock-scroll");
  });
  $(document).mouseup(function (e) {
    let container = $("#contactForm");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
      $("body").removeClass("lock-scroll");
    }
  });
});

////////////////////

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);
