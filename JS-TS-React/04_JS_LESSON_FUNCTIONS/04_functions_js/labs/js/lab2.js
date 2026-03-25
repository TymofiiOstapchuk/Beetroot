const startBtn = document.getElementById("start");
const info = document.getElementById("info");

function animateIt(id, tick = 150) {
  console.log("animate boxes");
/*  todo */
}




startBtn.addEventListener("click", handleClick);

function handleClick() {
  animateIt("shape");
  animateIt("shape1", 300);
}

function showInfo(msg) {
  info.innerHTML += `<p>${msg}</p>`;
}
