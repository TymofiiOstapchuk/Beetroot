/*  
npx tsx ./src/tasks_1/10_task.ts 
*/
type Circle = {
  kind: "circle";
  radius: number;
};
type Square = {
  kind: "square";

  sideLength: number;
};

type Shape = Circle | Square;

/* 
помилки - тому що значення можуть бути undefined  
Завдання - виправити код type Shape так щоб не було помилок 
*/
function calculateArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}

const areaRes = calculateArea({
  kind: "circle",
  radius: 5,
});

console.log(areaRes); //  78.53981633974483

const areaRes1 = calculateArea({
  kind: "square",
  sideLength: 5,
});
console.log(areaRes1); // result => 25
