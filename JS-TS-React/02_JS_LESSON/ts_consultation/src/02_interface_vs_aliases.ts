/* 
На відміну від типів, інтерфейс може описувати
тільки об'єктний тип, тобто такі типи інтерфейсом не опишеш 
 */

/* 1. Для type aliases недоступне декларативне злиття, так не можна робити
 */
// @ts-expect-error
type TAccount = {
  name: string;
};
// @ts-expect-error
type TAccount = {
  age: number;
};
/* А з інтерфейсами  все OK */
interface IAccount {
  name: string;
}
interface IAccount {
  age: number;
}

/* 2. Інтерфейси можна розширювати */
interface Person {
  name: string;
}
interface Student extends Person {
  age: number;
}

/* А як с  type ? */
type Person1 = {
  name: string;
};

type Student1 = Person1 & { age: number };
