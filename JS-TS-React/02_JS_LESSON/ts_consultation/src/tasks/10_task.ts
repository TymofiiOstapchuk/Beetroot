/* 
npx ts-node ./src/tasks/10_task.ts 

У нас є 2 функції getRectangleArea,  getRectanglePerimeter
Обидві в аргумент приймають об'єкт, який один і той самий 
Виникає питання - навіщо ми його повторюємо
А  ще бажано щоб в коді було тільки одне джерело типу 

Завдання -  провести рефакторіфнг коду так, щоб у нас 
в обидвох функціях тип параметру визначався  type alias 
type Rectangle 
 */
{
  const getRectangleArea = (rectangle: { width: number; height: number }) => {
    return rectangle.width * rectangle.height;
  };

  const getRectanglePerimeter = (rectangle: {
    width: number;
    height: number;
  }) => {
    return 2 * (rectangle.width + rectangle.height);
  };

  const res1 = getRectangleArea({
    width: 10,
    height: 20,
  });

  const res2 = getRectanglePerimeter({
    width: 10,
    height: 20,
  });

  console.log(res1); //200
  console.log(res2); //60
}
