import { Equal, Expect } from "../utils/utils";

/*  
conditional logic 

Завдання 
визначити тип SayHello, якщо котрому передати "hello" він поверне "goodbye" 
і навпаки  
*/

{
  type SayHello<T> = T extends "hello" ? "goodbye" : "hello";

  type T1 = SayHello<"hello">; // "goodbye"
  type T2 = SayHello<"goodbye">; // "hello"

  /* ======= tests  */
  // prettier-ignore
  type tests = [
    Expect<Equal<T1, "goodbye">>,
    Expect<Equal<T2, "hello">>
  ];
}
