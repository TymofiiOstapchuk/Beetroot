/*  
npx tsx  ./src/tasks_1/06_task.ts 
*/

const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }
  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  /*
  Завдання - прибрати помилку 
  */
  if (true) {
    console.error(error.message);
  }
}
