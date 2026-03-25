/*  
Є загальний тип HttpCode

Завдання 
- функція handleErrorCase  має отримувати тільки "400" | "401" | "404" | "500"  
  Це має бути окремий тип    

- функція handleErrorCase  має отримувати тільки "200" | "201" | "204"
  Це має бути окремий тип  

- функція handleErrorCase  має отримувати всі типи   
            "200" | "201" | "204" | "400" | "401" | "404" | "500"     
  Це має бути комбінація попередніх типів 
*/

{
  type ErrorCode = "400" | "401" | "404" | "500";

  type SuccessCode = "200" | "201" | "204";

  type HttpCode = ErrorCode | SuccessCode;

  // має отримувати тільки "400" | "401" | "404" | "500"
  const handleErrorCase = (code: ErrorCode) => {};

  // має отримувати тільки "200" | "201" | "204"
  const handleSuccessCase = (code: SuccessCode) => {};

  //  має отримувати тільки  "200" | "201" | "204" | "400" | "401" | "404" | "500"
  const handleAllCase = (code: HttpCode) => {};
}
