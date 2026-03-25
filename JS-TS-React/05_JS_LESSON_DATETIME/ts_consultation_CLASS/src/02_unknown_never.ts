/* ============== any type 
any -> може бути все, що завгодно за JS правилами
*/
let x1: any = 14;
x1.in.may.be.anything;

/* ============== unknown type
Цьому типу можно присвоїти все що завгодно 
Він прежставляє щось те тип чого що ми ще не знаємо, 
але він на відміну від any підлягає type checking  

Тобто unknown -> те ж що і any але його не можна
                 використовувати без type guards
===== */

let x2: unknown = 14;
x2.in.may.be.anything; // 🚨 ERROR Object is of type 'unknown'

/* Все що завгодно можно присвоїти типу unknown */
function fn(input: unknown) {}

fn("hello");
fn(true);
fn(23);
fn([]);
fn({});
fn(() => {});

/* 
======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
task_1/06_task.html
tasks_1/07_task.html
*/

/* 
*******************************************************
****************   never  *****************************
*******************************************************

never - Немає можливих значень дозволених системою типів
Тобто never предствляє  те що ніколи не трапиться
*/

// Ця функція  повертає  never, тому що вона ніколи нічого не поверне!
// функція unreachable
const getNever = () => {
  throw new Error("This function never returns");
};

const fnever = (input: never) => {};

// Нічого не можемо присвоїти типу never
fnever("hello");
fnever(42);
fnever(true);
fnever({});
fnever([]);
fnever(() => {});

// never  можно присвоїти never
fnever(getNever());

/* 
======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
task_1/08_task.ts
task_1/09_task.ts
tasks_1/10_task.ts
tasks_1/11_task.ts
tasks_1/12_task.ts
==================================================================
*/
