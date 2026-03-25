import { Equal, Expect } from "../utils/utils";
/*  
Наприклад - треба створити тип, який при  передачі йому об'єкту 
{ data: ..... } буде повертати значення data 

*/

{
   type GetDataValue<T> = unknown;
  


  type T1 = GetDataValue<{ data: "hello" }>;
  type T2 = GetDataValue<{ data: { name: "hello" } }>;
  type T3 = GetDataValue<{ data: { name: "hello"; age: 20 } }>;
  type T4 = GetDataValue<string>;
  type T5 = GetDataValue<{}>;

  /*  testing  */
  type tests = [
    Expect<Equal<T1, "hello">>;
    Expect<Equal<T2, { name: "hello" }>>;
    Expect<Equal<T3, { name: "hello"; age: 20 }>>;

    // Якщо передамо  string, має повернутись  never
    Expect<Equal<T4, never>>,
    Expect<Equal<T5, never>>

  ];
}
