/* 
npx tsx ./src/tasks/06_task.ts 

Завдання - зробити свойство last в об'єкті user optional 
 */

{
  const concatName = (user: { first: string; last: string }) => {
    if (!user.last) {
      return user.first;
    }
    return `${user.first} ${user.last}`;
  };

  const res = concatName({
    first: "John",
    last: "Doe",
  });
  console.log(res); // John Doe

  const res1 = concatName({
    first: "John",
  });
  console.log(res1); // John
}
