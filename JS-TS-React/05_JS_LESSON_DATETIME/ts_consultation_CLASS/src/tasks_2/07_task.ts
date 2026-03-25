import { Equal, Expect } from "../utils/utils";
/*  
Наприклад -  з типу Names хочемо витягнути тільки призвище 
*/

{
  type Names = [
    "John Doe",
    "Jimi Hendrix",
    "Eric Clapton",
    "John Mayer",
    "BB King"
  ];

  type GetSurname<T> = unknown;

  type T1 = GetSurname<Names[0]>;
  type T2 = GetSurname<Names[1]>;
  type T3 = GetSurname<Names[2]>;
  type T4 = GetSurname<Names[3]>;
  type T5 = GetSurname<Names[4]>;

  type tests = [
    Expect<Equal<T1, "Doe">>,
    Expect<Equal<T2, "Hendrix">>,
    Expect<Equal<T3, "Clapton">>,
    Expect<Equal<T4, "Mayer">>,
    Expect<Equal<T4, "King">>
  ];
}
