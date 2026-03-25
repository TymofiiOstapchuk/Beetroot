/*  
npx ts-node ./src/tasks_1/08_task.ts 
*/

const shoppingCart = {
  items: [],
};

console.log(shoppingCart.items);

/* 
Помилка тут 
Argument of type 'string' is not assignable
to parameter of type 'never'

Завдання - з'ясувати чому ця помился та усунути її
*/
shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");
