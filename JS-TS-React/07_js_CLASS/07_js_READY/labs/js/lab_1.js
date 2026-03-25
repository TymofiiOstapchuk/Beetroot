import { generateId } from "./utils.js";

const items = document.getElementById("items");

document.addEventListener("submit", handleSubmit);
document.addEventListener("click", handleDelete);

function handleSubmit(e) {
  e.preventDefault();
  const { target } = e;
  if (target.name !== "myform") {
    return;
  }
  const newTextEl = target.newtext;
  if (!newTextEl.value.trim().length) {
    alert("Enter link");
    return;
  }
  const link = createLink(newTextEl.value);
  newTextEl.value = "";
}

function createLink(val) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const btn = document.createElement("button");
  const id = generateId();
  const btnText = document.createTextNode("Remove link");

  a.href = val;
  a.textContent = val;
  a.target = "_blank";

  li.className = "list-group-item d-flex my-3";
  li.id = id;
  li.appendChild(a);

  btn.appendChild(btnText);
  btn.className = "btn btn-primary btn-sm ms-auto js-btn-delete";
  btn.dataset.deleteid = id;

  li.appendChild(btn);
  items.appendChild(li);
  return li;
}

function handleDelete({ target }) {
  if (!target.classList.contains("js-btn-delete")) {
    return;
  }

  if (!confirm("Are you sure ? ")) {
    return false;
  }
  const deleteId = target.dataset.deleteid;
  const deleteEl = document.getElementById(deleteId);

  deleteEl.parentNode.removeChild(deleteEl);
}
