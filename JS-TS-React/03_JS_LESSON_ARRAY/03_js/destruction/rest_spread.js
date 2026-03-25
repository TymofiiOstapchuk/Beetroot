// Rest оператор => застосовується при декларуванні функції
// Його завдання - зібрати (gather) аргументи в масив

/* 
function foo(...args) {
  console.log(args); // [1,2,3,4,5]
}
foo(1, 2, 3, 4, 5);
*/

// оператор Rest дозволяють передавати функції будь-яку кількість аргументів.

/* 
function joinStaff(...staff) {
  console.log(staff); // ["Hello", "rest", "params"]

  console.log(staff[0]); //Hello
  console.log(staff[1]); //rest
  console.log(staff[2]); //params

  console.log(staff.join(" "));
}
joinStaff("Hello", "rest", "params");
*/

/* 
function foo(x, ...args) {
  console.log(x); // 1
  console.log(args); // [2,3,4]
}
foo(1, 2, 3, 4);
*/

/* ====================== Spread ================== */

// Spread оператор - дозволяє перетворювати значення
// масивів та об'єктів у кілька змінних
// Наприклад, у кілька аргументів (при викликах функції)

/* 
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var res = [0].concat(arr1, arr2, [7]);
console.log(res);

// А можна зробити так
res = [0, ...arr1, ...arr2, 7];
console.log(res);
*/

/*
// Використання з push
arr1.push(arr2);
console.log(arr1); //[1,2,3, [4,5,6]] - не то что хотели
*/

/*
var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1.push(...arr2);
console.log(arr1);// [1,2,3,4,5,6]
*/

/*
 function sum(a,b,c){
      return a + b + c;
 }
 var arr = [10,20,30];
 var res = sum(...arr);
 console.log(res); // 60
 */
