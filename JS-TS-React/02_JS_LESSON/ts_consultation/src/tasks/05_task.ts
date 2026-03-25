/*  
npx ts-node ./src/tasks/05_task.ts 

Завдання - притипизувати параметр user функції concatName3 
 літеральним об'єктом 
 */
{
  const concatName = (user) => {
    return `${user.first} ${user.last}`;
  };

  const res = concatName({
    first: "John",
    last: "Doe",
  });
}
