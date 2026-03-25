/* 
npx tsx ./src/tasks/10_task.ts 

У нас є 2 функції getRectangleArea,  getRectanglePerimeter
Обидві в аргумент приймають один і той самий об'єкт 
{width: , height:} 
Виникає питання - навіщо ми його повторюємо ? 
А  ще бажано щоб в коді було тільки одне джерело типу 

Завдання -  провести рефакторіфнг коду так, щоб у нас 
в обидвох функціях тип параметру визначався  type alias 
  type Rectangle 
 */
{
  type Rectangle = {
    width: number;
    height: number;
  };

  const getRectangleArea = (rectangle: Rectangle) => {
    return rectangle.width * rectangle.height;
  };

  const getRectanglePerimeter = (rectangle: Rectangle) => {
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
