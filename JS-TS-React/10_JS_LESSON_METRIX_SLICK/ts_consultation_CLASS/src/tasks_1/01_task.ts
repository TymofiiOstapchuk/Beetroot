/*  
npx tsx ./src/tasks_1/01_task.ts 

Коли ми викликаємо фукнкцію getUsername(null) з аргументом null 
то бачимо помилку
Але в реальних ситуаціях це можливо, коли в аргумент прийде null 
(наприклад з бази даних)

Завдання -  визначити тип для параметру username, щоб він передбачав 
отримання string або null 
 */

{
  function getUsername(username: string | null) {
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

  type User = string | number;
  let user: User = "Bill";
  let user1: User = 12;
  function test(u: string) {}
  function test1(u: number) {}

  test(user1);
  test1(user);
}
