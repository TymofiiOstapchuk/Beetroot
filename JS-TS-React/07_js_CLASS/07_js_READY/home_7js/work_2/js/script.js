import { v4 as uuidv4 } from "./uuid.js";

const selectBox = document.getElementById("remselect");
const lists = document.getElementById("lists");

document.addEventListener("click", addToList, false);
document.addEventListener("click", remLink, false);

function addToList({ target }) {
  if (target.name !== "addBtn") {
    return;
  }

  const el = document.createElement("a");
  const div = document.createElement("div");
  el.href = newtext.value;
  el.appendChild(document.createTextNode(newtext.value));

  const ind = uuidv4();

  div.id = ind;
  div.appendChild(el);
  lists.appendChild(div);
  addOption(newtext.value, ind);
  newtext.value = "";
}
function addOption(val, ind) {
  const op = document.createElement("option");
  op.text = val;
  op.value = ind;
  selectBox.appendChild(op);
  selectBox.size = remselect.options.length;
}

function remLink({ target }) {
  if (target.id !== "rembtn") {
    return;
  }
  [...selectBox.options].forEach((opt) => {
    if (opt.selected) {
      let el = document.getElementById(opt.value);
      lists.removeChild(el);
      selectBox.removeChild(opt);
    }
  });
}
