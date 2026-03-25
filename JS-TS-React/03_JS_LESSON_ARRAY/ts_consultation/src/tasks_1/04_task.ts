/*  
npx tsx ./src/tasks_1/04_task.ts 

Завдання 
Переписати функцію validateUsername так, щоб 
вона проводила перевірку аргументів які їй передаються 
і поаертала 
 - якщо передали строку довжина якої меньше ніж 5 символів => false
 - якщо передали строку довжина якої, більше ніж 5 символів => true
 - якщо передали null => false
*/

{
  function validateUsername(username: string | null): boolean {
    return username.length > 5;

    return false;
  }

  console.log(validateUsername("Matt1234")); // true

  console.log(validateUsername("Alice")); // false
  console.log(validateUsername("Bob")); // false
  console.log(validateUsername(null)); // false
}
