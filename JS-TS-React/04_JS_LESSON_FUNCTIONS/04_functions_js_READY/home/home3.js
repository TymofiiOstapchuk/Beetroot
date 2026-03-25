/*
 * Створити функцію filter(arr, fn), яка
 *  - приймає в аргумент масив arr та  функцію fn
 *  - повертає новий масив, який містить тількі ті елементи arr,
 *    для яких fn повертає true
 */

const arr = [11, 66, 33, 44, 22, 55, 2];

function filter(list, fn) {
  var out = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (fn.call(list, list[i])) {
      out.push(list[i]);
    }
  }
  return out;
}

const filteredArr = filter(arr, (item) => item > 50);

console.log(filteredArr); //   [66, 55]]
