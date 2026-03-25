/* 
В масив зберігли 3 функції. Але виклик кожної з них 
виводе результат = 3
Завдання - виправити код так, щоб вивід був таким 
fn[0](); -> 0
fn[1](); -> 1
fn[2](); -> 3
❗❗❗ Це завдання вирішити з використанням ES 5 (тобто без let)
*/

function buildFunctions() {
  let out = [];
  for (var i = 0; i < 3; i++) {
    out.push(
      (function (i) {
        return function () {
          console.log(i);
        };
      })(i)
    );
  }
  return out;
}
const fn = buildFunctions();

// console.log(fn);

fn[0]();
fn[1]();
fn[2]();
