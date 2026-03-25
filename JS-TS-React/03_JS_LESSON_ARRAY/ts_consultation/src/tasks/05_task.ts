/*  
npx tsx ./src/tasks/05_task.ts 

Завдання - притипизувати параметр user функції concatName 
літеральним об'єктом, у якого мають бути тільки свойства 
first, last 
 */
{
  const concatName = (user) => {
    return `${user.first} ${user.last}`;
  };

  const res = concatName({
    first: "John",
    last: "Doe",
  });

  /* Ост тут має біти помилка  */
  // @ts-expect-error
  const res1 = concatName({
    name: "John",
    surname: "Doe",
  });

  console.log(res);
}
