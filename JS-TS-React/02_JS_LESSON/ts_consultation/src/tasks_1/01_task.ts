/*  
npx ts-node ./src/tasks_1/01_task.ts 

Коли ми викликаємо фукнкцію getUsername(null) з аргументом null 
то бачимо помилку
Але в реальних ситуаціях це можливо, коли в аргумент прийде null 
(наприклад з бази даних)

Завдання -  визначити тип для параметру username, щоб він передбачав 
отримання string або null 

 */

{
  function getUsername(username: string) {
    if (username !== null) {
      return `User: ${username}`;
    } else {
      return "Guest";
    }
  }
  const result = getUsername("Alice"); // User: Alice
  const result2 = getUsername(null); // Guest

  console.log(result);
  console.log(result2);
}
