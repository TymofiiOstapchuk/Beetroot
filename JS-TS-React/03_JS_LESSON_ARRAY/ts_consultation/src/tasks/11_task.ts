/* 
В type Recipe  нестає декларації масива об'єктів - ingragiens 
Це тип має мати вигляд 

ingredients: [
  { name: string, qty: string; },
  { name: string, qty: string; },
  { name: string, qty: string; },
  ...... 
  { name: string, qty: string; },
]
Тобто скільки буде об'єктів в масиві ми не знаємо 

Завдання -  протипизувати ingradients  
 */
{
  type Recipe = {
    title: string;
    instructions: string;
  };

  const processRecipe = (recipe: Recipe) => {
    console.log(recipe.title);
    recipe.ingredients.forEach((item) => console.log(item.name, item.qty));
  };

  processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
      { name: "Flour", qty: "2 cups" },
      { name: "Sugar", qty: "1 cup" },
    ],
    instructions: "this is instructions",
  });
}
