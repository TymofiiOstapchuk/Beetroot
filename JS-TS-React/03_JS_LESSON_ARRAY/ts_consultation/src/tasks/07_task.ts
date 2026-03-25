/* 
npx tsx ./src/tasks/07_task.ts 

Функція  приймає rest параметр ...strings 
Завдання - протипизувати його 
*/
{
  function concatenate(...strings) {
    return strings.join("");
  }
  const res = concatenate("Hello", " ", "World");
  console.log(res); // "Hello World"
}
