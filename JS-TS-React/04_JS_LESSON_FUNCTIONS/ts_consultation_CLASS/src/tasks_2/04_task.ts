import { Equal, Expect } from "../utils/utils";

/*  
conditional logic 

Завдання 
визначити тип SayHello, якщо котрому передати "hello" він поверне "goodbye" 
і навпаки  
*/

{
  type SayHello = unknown;

  type T1 = SayHello<"hello">; // "goodbye"
  typeT2 = SayHello<"goodbye">; // "hello"

  /* ======= tests  */
  // prettier-ignore
  type tests = [
    Expect<Equal<T1, "goodbye">>,
    Expect<Equal<T2, "hello">>
  ];
}
