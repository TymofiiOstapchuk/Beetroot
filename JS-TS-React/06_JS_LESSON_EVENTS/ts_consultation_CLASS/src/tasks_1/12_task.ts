/*  
npx tsx ./src/tasks_1/12_task.ts

Завдання - зробити рефакторінг коду - перевести 
функцію calculateArea на використання switch замість if
*/

{
  type Circle = {
    kind: "circle";
    radius: number;
  };

  type Square = {
    kind: "square";
    sideLength: number;
  };

  type Shape = Circle | Square;

  function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else {
      return shape.sideLength * shape.sideLength;
    }
  }

  const result1 = calculateArea({
    kind: "circle",
    radius: 5,
  });
  console.log(result1); // 78.53981633974483

  const result2 = calculateArea({
    kind: "square",
    sideLength: 5,
  });
  console.log(result2); // 25
}
