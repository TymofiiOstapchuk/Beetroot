const d = new Date();
const dateNormalize = d => (d < 10 ? "0" + d : d);

document.querySelector(".footer-box__date").textContent = `${dateNormalize(
  d.getDate()
)}.${dateNormalize(d.getMonth())}.${d.getFullYear()}`;
