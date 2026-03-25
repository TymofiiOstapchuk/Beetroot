const usedNums = Array(76);
const reload = document.getElementById("reload");

function init() {
  reload.onclick = getCards;
  getCards();
}

function getCards() {
  cleanUsedNums();
  for (let i = 0; i < 24; i++) {
    getCard(i);
  }
  return false;
}
function cleanUsedNums() {
  for (let i = 0, len = usedNums.length; i < len; i++) {
    usedNums[i] = false;
  }
}

function getCard(n) {
  const square = "square" + n;
  // prettier-ignore
  const colNums = [
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4
  ];

  let randomNum;
  do {
    randomNum = 15 * colNums[n] + generateRandon(15);
  } while (usedNums[randomNum]);

  usedNums[randomNum] = true;
  document.getElementById(square).innerHTML = randomNum;
}

function generateRandon(n) {
  return Math.floor(Math.random() * n) + 1;
}

init();
