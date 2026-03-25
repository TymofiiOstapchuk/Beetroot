/*  
Завдання = для типу Maybe<T> визначити обмеження, щоб 
иожно будл передавати тільки типи string, boolean, number
А при передачі null або undefined має бути помилка
 */

{
  type Maybe<T extends {}> = T | null | undefined;

  let a: {} = "bla bla";
  let b: {} = true;
  let c: {} = 33;
  let d: {} = { a: "asdfasdf" };

  type tests = [
    // @ts-expect-error
    Maybe<null>,
    // @ts-expect-error
    Maybe<undefined>,

    Maybe<string>,
    Maybe<false>,
    Maybe<0>,
    Maybe<"">
  ];
}
