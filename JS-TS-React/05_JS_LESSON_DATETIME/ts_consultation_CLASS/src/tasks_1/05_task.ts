/*  
npx tsx ./src/tasks_1/05_task.ts 

Завдання - в функції  handleResponse провести перевірку
чи є 'data' в  response об'єкті якій їй передається ?
*/

{
  type APIResponse =
    | {
        data: {
          id: string;
        };
      }
    | {
        error: string;
      };

  const handleResponse = (response: APIResponse) => {
    // Як нам тут визначити чи  'data' є в  response об'єкті ?
    if (true) {
      return response.data.id;
    } else {
      return response.error;
    }
  };

  const response = {
    data: {
      id: "123",
    },
  };

  console.log(handleResponse(response)); // міє бути "123"

  const response1 = {
    error: "Something went wrong",
  };
  console.log(handleResponse(response1)); // "Something went wrong"
}
