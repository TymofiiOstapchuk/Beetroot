/*  
Бачимо помилку в функції GetParametersAndReturnType 

Завдання -  визначити для типу T  функції GetParametersAndReturnType
правильне обмеження 

 */

{
  type GetParametersAndReturnType<T extends (...args: any) => void> = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
  };

  type T1 = GetParametersAndReturnType<() => string>;

  type T2 = GetParametersAndReturnType<(s: string) => void>;

  type T3 = GetParametersAndReturnType<(n: number, b: boolean) => number>;
}
