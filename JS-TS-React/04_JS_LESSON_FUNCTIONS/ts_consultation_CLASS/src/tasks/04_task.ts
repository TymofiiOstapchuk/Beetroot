/* 
npx tsx ./src/tasks/04_task.ts

Зробити так, щоб коли ми не передаємо 2-й  аргумент 
в фунцію concatName він по замовчуванню був Smith
*/
{
  const concatName = (first: string, last: string = "Smith") => {
    if (!last) {
      return first;
    }

    return `${first} ${last}`;
  };

  const res1 = concatName("John", "Doe");
  const res2 = concatName("Pete");

  console.log(res1); // John Doe
  console.log(res2); // Pete Smith
}
