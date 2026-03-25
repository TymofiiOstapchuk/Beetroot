/* Todo:
Є 3 логера, котрі виводять різні заголовки та текст повідомлень
Завдання - реалізувати таку ж функціональність, але її має 
виконувати одна функція

---- usage
    log("Message 1");
    log("Message 2");
    log("Message 3"); 
*/

function log() {
  // todo
}

function log1(message) {
  let out = `LOG_1: ${message}`;
  console.log(out);
}
function log2(message) {
  let out = `LOG_2: ${message}`;
  console.log(out);
}
function log3(message) {
  let out = `LOG_3: ${message}`;
  console.log(out);
}
log1("Message 1");
log2("Message 2");
log3("Message 3");
