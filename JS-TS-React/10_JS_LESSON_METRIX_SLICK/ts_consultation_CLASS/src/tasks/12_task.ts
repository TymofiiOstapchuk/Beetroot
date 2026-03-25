/* 
npx tsx ./src/tasks/12_task.ts 

 Функція processCart приймає об'єкт з типом ShoppingCart
 Але цей имп некоректно написаний 

 Завдання - визначити правильний тип ShoppingCart
 */
{
  type ShoppingCart = {
    userId: string;
    items: string[];
  };

  const processCart = (cart: ShoppingCart) => {
    console.log(cart.userId);
    console.log(cart.items.join(", "));
  };

  processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
  });
}
