const startBtn = document.getElementById("start");
const info = document.getElementById("info");

function animateIt(id, tick = 150) {
  let el = document.getElementById(id);
  let t = 0;
  let handle = setInterval(function () {
    if (t >= tick) {
      clearInterval(handle);
      showInfo(`${id}: ${t}`);
      return;
    }
    t++;
    el.style.left = el.style.top = t + "px";
  }, 10);
}

startBtn.addEventListener("click", handleClick);

function handleClick() {
  animateIt("shape");
  animateIt("shape1", 300);
}

function showInfo(msg) {
  info.innerHTML += `<p>${msg}</p>`;
}
