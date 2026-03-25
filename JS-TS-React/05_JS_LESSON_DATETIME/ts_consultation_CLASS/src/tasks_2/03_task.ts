/*  
Завдання  - для типу NonEmptyArray визначити такий generic 
щоб йому можно було передавати масив строк 
А якщо передати пустий масив має бути помилка 

Підсказка - NonEmptyArray має повертати generic tuple 
у якого можуть бути від одного і більше типів   
*/

{
  type NonEmptyArray = unknown;

  const makeEnum = (values: NonEmptyArray<string>) => {};

  makeEnum(["a"]);
  makeEnum(["a", "b", "c"]);

  // @ts-expect-error
  makeEnum([]);
}
