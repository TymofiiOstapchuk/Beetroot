const f = document.forms.myform;
const links = document.getElementById("lists");
let existsLinks = 0;

document.addEventListener("click", handleClick);

function handleClick({ target }) {
  existsLinks = links.querySelectorAll("a");
  switch (target.name) {
    case "addBtn":
      add();
      break;
    case "remBtn":
      remove();
      break;
  }
}

function add() {
  if (existsLinks.length === 0) {
    addNode();
    return true;
  }
  const indexBefore = +prompt("Enter index");
  indexBefore ? addNode(indexBefore) : addNode();
}
function addNode(i = 0) {
  const el = f.newtext;
  const val = el.value.trim();
  if (!val) {
    alert("Enter number");
    return;
  }
  const tNode = document.createTextNode(val);
  const a = document.createElement("a");
  a.href = val;
  a.appendChild(tNode);

  if (!i || i > existsLinks.length) {
    links.appendChild(a);
  } else {
    const beforeNode = existsLinks.item(i - 1);
    links.insertBefore(a, beforeNode);
  }
  el.value = "";
}

function remove() {
  if (!existsLinks.length) {
    alert("Nothing delete");
    return;
  }
  let deleteBefore = +prompt("Enter index");
  if (!deleteBefore || deleteBefore > existsLinks.length) {
    deleteBefore = existsLinks.length;
  }
  removeNode(deleteBefore);
}

function removeNode(i) {
  const delNode = existsLinks.item(i - 1);
  links.removeChild(delNode);
}
