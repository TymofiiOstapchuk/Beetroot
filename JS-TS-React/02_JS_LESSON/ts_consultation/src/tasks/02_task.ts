/* 
npx ts-node ./src/tasks/02_task.ts

Завдання - виправити помилку в функції add
*/

{
  const add = (a: number, b: boolean) => {
    return a + b;
  };

  const res = add(3, 4);
  console.log(res);
}
