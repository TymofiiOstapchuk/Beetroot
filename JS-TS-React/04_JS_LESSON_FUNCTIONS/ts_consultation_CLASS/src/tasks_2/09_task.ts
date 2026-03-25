import { Equal, Expect } from "../utils/utils";
/*  
 Наприклад - з кожного парсеру треба витягнути повертаемий тип 
*/

{
  const parser1 = {
    parse: () => 1,
  };

  const parser2 = () => "123";

  const parser3 = {
    extract: () => true,
  };

  type GetParserResult<T> = unknown;

  type T1 = GetParserResult<typeof parser1>;
  type T2 = GetParserResult<typeof parser2>;
  type T3 = GetParserResult<typeof parser3>;

  /* ========== tests  */
  type tests = [
    Expect<Equal<T1, number>>,
    Expect<Equal<T2, string>>,
    Expect<Equal<T3, boolean>>
  ];
}
