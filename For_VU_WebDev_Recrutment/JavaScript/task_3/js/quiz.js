/* 
Програма повинна
1. Вивести для користувача 3 питання з масиву questions 
   (використовувати функцію prompt())
2. За відповідями користувача підрахувати та зберегти 
   кількість правильних та неправильних відповідей
   Підказка: Результати зберігати в масивах 
   rightAnswers, wrongAnswers
3. Вивести результати в div з id="result" так, 
   як показано на слайдах HOME.pptx
   Підказка: Тобто треба в циклі по черзі обійти масиви
	rightAnswers, wrongAnswers та сформувати строку з 
    результатами. Цю строку  за допомогою innerHTML
    вивести в div з id="result"
 */
var questions = [
  ["2 + 2", 4], // 2 + 2 -> это вопрос, 4 -> правильный ответ
  ["9 / 3", 3],
  ["5 * 5", 25],
];
const wrong = [];
const right = [];
let st = "";

questions.forEach((q) =>
  Number(prompt(q[0])) === q[1] ? right.push(q) : wrong.push(q)
);

function getResult(list, message) {
  let st = `<h2>You have ${list.length} ${message} answers</h2>`;
  list.forEach((a, i) => (st += `<p>${i + 1}. ${a[0]} = ${a[1]}</p>`));
  return st;
}

right.length && (st += getResult(right, "right"));
wrong.length && (st += getResult(wrong, "wrong"));

document.getElementById("result").innerHTML = st;
