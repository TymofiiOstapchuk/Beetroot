import { Equal, Expect } from "../utils/utils";
/* 
  Завдання - на підставі інтерфейсу  Attributes
  отримати тип
       {
          getFirstName: () => string;
          getLastName: () => string;
          getAge: () => number;
        }
*/
{
  interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
  }

  type Example = {
    [K in keyof Attributes]: K;
  };

  type AttributeGetters = unknown;

  type tests = [
    Expect<
      Equal<
        AttributeGetters,
        {
          getFirstName: () => string;
          getLastName: () => string;
          getAge: () => number;
        }
      >
    >
  ];
}
