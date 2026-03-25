/* 
замість типу для  range: Array<number> тут має бути інший тип, 
який буде точно визначачи тип кожного елемента в масиві (tuple) 

Завдання - визначити такий тип 

*/
{
  const setRange = (range: [number, number]) => {
    const x = range[0];
    const y = range[1];
  };
  setRange([0, 10]); // не має помилки

  setRange([0, "10"]); // має бути помилка

  setRange([0]); // має бути помилка

  setRange([0, 10, 20]); // має бути помилка
}
