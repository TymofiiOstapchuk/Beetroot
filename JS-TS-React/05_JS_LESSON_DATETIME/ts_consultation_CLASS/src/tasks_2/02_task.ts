/*  
Завдання = для типу Maybe<T> визначити обмеження, щоб 
иожно будл передавати тільки типи string, boolean, number
А при передачі null або undefined має бути помилка
 */

{
  type Maybe<T> = T | null | undefined;

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
