const gal = $(".gallery");
gal.isotope({
  itemSelector: ".photo",
  getSortData: {
    name: "h2",
    created(item) {
      return item.dataset.create;
    },
  },
});

gal.imagesLoaded().progress(function () {
  gal.isotope("layout");
});

/* $(document).on("click", ".nav__item", function () {
  const $this = $(this);
  const filter = "." + $this.data("filter");
  gal.isotope({ filter });
});
 */
document.addEventListener("click", handleFilter);

function handleFilter({ target }) {
  if (!target.classList.contains("nav__item")) {
    return;
  }
  const filter = "." + target.dataset.filter;
  gal.isotope({ filter });
}

$(document).on("click", "#sort-btn", function () {
  const sortBy = $(this).data("sort");
  gal.isotope({ sortBy });
});

$(document).on("change", "#sort-select", function () {
  const sortBy = $(this).val();
  if (+sortBy === -1) {
    alert("Choose sort");
    return;
  }
  gal.isotope({ sortBy });
});
// No delete
document.getElementById("footer-year").textContent = new Date().getFullYear();
