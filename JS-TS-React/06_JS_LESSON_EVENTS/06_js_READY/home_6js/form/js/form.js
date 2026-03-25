import { isValidRule } from "./utils.js";

document.addEventListener("submit", handleSubmit);
document.addEventListener("keyup", handleKey, true);

function handleSubmit(e) {
  const { target } = e;
  if (target.id !== "loginform") {
    return;
  }
  let isValid = true;
  const els = [...target.elements];

  for (let i = 0, len = els.length; i < len; i++) {
    const el = els[i];

    if (!el.classList.contains("js-validate")) {
      continue;
    }
    const evt = new Event("keyup");
    el.dispatchEvent(evt);

    if (el.classList.contains("is-invalid")) {
      isValid = false;
      el.nextElementSibling.textContent = el.dataset.error;
      break;
    }
  }
  if (!isValid) {
    e.preventDefault();
  }
}

function handleKey({ target }) {
  const cls = target.classList;
  if (!cls.contains("js-validate")) {
    return;
  }
  if (!isValidRule(target.value)) {
    cls.add("is-invalid");
    cls.remove("is-valid");
    return;
  }
  cls.remove("is-invalid");
  cls.add("is-valid");
}
