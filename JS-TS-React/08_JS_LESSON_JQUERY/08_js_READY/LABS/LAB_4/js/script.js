$("html").addClass("js");

const contactForm = {
  form: $("#contact"),
  config: {
    effect: "slideToggle",
    speed: "700",
  },
  init(config) {
    //$.extend(this.config, config);
    //this.config = Object.assign({}, this.config, config);
    this.config = { ...this.config, ...config };

    $(".content-box").append(
      $("<button>", {
        text: "Open form",
      }).click(() => this.openForm())
    );
  },
  openForm() {
    if (!this.form.is(":hidden")) {
      return;
    }
    const { effect, speed } = this.config;
    this.form[effect](speed);
    this.closeForm();
  },
  closeForm() {
    if (this.form.find("span.close").length) {
      return;
    }
    $("<span>", {
      class: "close",
      text: "X",
    })
      .prependTo(this.form)
      .click(() => {
        const { effect, speed } = this.config;
        this.form[effect](speed);
      });
  },
};

contactForm.init({
  effect: "fadeToggle",
  speed: 800,
});
