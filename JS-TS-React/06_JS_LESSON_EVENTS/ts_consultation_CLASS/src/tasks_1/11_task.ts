/*  
npx tsx ./src/tasks_1/11_task.ts 
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

  /* Чому тут помилка ?  */
  function calculateArea({ kind, radius, sideLength }: Shape) {
    if (kind === "circle") {
      return Math.PI * radius * radius;
    } else {
      return sideLength * sideLength;
    }
  }

  const result1 = calculateArea({
    kind: "circle",
    radius: 5,
  });

  const result2 = calculateArea({
    kind: "square",
    sideLength: 5,
  });

  console.log(result1); // 78.53981633974483
  console.log(result2); // 25
}
