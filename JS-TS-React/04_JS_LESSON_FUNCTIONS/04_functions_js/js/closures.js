function fn() {
  return "Hello";
}
console.log(fn());

/* ===== closures features */
/* 
1. В closure попадають тільки ті сущності на які
посиляється внутрішня функція 
*/
/*
function test() {
  const a = 5;
  const b = 10;
  return function () {
    debugger;
    console.log(`${a}`);
  };
}
const fn = test();
fn();
*/

/* 
2. В closure також попадають аргументи функцій 
Між вікликами функцій данні в closure не знищуються 
 */
/*
function fn(greeting) {
  return function (firstName) {
    debugger;
    console.log(`${greeting} ${firstName}`);
  };
}

const f = fn("Hello");
f("Bill");
*/

/* 
3. навіть якщо ми знищемо внутрішню функцію, 
 closure буде працювати
*/
/*
function fn(greeting) {
  return function (firstName) {
    debugger;
    console.log(`${greeting} ${firstName}`);
  };
}
const f = fn("Hello");
fn = null;
f("Tom");
*/

/*
4. В closure також входять функції parent LE, які
викликаються в функції яка повертається
*/
/* 
function fn() {
  const firstName = "Bill";
  function inner() {
    return "Hello " + firstName;
  }
  return function () {
    debugger;
    console.log(inner);
  };
}
const f = fn();
f();
 */

/* 
5. Приклад closure функцфх на глобальну змінну
*/
/* 
let out;
function fn() {
   out = function (name) {
   console.log(`Hello ${name}`);
   };
}

out("Bill"); // Error - почему ? 
*/
