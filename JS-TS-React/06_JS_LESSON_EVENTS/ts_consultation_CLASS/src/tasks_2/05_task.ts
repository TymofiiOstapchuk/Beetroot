import { Equal, Expect } from "../utils/utils";
/*  
Завдання 
провести корегування  типу SayHello, якому можно передавати тільки 
"hello" або "goodbye", 
решта випадків він має повертати never  
*/

{
  type SayHelloGoodbye<T> = T extends "hello" ? "goodbye" : "hello";

  type T1 = SayHelloGoodbye<"hello">; // "goodbye"
  type T2 = SayHelloGoodbye<"goodbye">; // "hello"
  type T3 = SayHelloGoodbye<"alright pal">; // never
  type T4 = SayHelloGoodbye<1>; // never

  /* testing  */
  type tests = [
    Expect<Equal<T1, "goodbye">>,
    Expect<Equal<T2, "hello">>,
    Expect<Equal<T3, never>>,
    Expect<Equal<T4, never>>
  ];
}
