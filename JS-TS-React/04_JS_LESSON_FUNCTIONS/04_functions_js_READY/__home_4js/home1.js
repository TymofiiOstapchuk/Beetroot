/* 
1. за допомогою debugger проаналізувати чому виходить так, що
при click на любий елемент li ми в alert() отримуємо ціфру 5
а за логікою маємо отримувати номер елемента на якому був click

2. За допомогою  closure зробити так, щоб при click едементі
   li отримували його номер (let НЕ ВИКОРИСТОВУВАТИ)
*/

const list = document.getElementById("list");
const els = list.getElementsByTagName("li");

for (var i = 0, len = els.length; i < len; i++) {
  els[i].onclick = function () {
    alert(i);
  };
}
