/*  
Завдання  - для типу NonEmptyArray визначити такий generic 
щоб йому можно було передавати масив строк 
А якщо передати пустий масив має бути помилка 

Підсказка - NonEmptyArray має повертати generic tuple 
у якого можуть бути від одного і більше типів   
*/

{
  type NonEmptyArray<T> = [T, ...Array<T>];

  const makeEnum = (values: NonEmptyArray<string | number>) => {};

  makeEnum(["a"]);
  makeEnum(["a", "b", "c"]);
  makeEnum(["a", "b", "c", "d"]);
  makeEnum([1, 2, 3]);

  // @ts-expect-error
  makeEnum([]);
}
