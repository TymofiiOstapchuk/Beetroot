/*
npx tsx ./src/tasks/03_task.ts

коли викликаємо функцію з одним  аргументом, 
то маємо помилку (concatNameRes2) 
Завдання - виправити декларування функції concatName,
щоб параметр last був optional 
 */

{
  const concatName = (first: string, last: string) => {
    if (!last) {
      return first;
    }

    return `${first} ${last}`;
  };

  const res1 = concatName("John", "Doe");
  const res2 = concatName("John");
}
