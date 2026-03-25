type Product<V extends { inTop: boolean }, T = string> = {
  id: number;
  color: T;
  info: V;
};

let product1: Product<{ inTop: boolean; price: number }> = {
  id: 12,
  color: "red",
  info: { price: 222, inTop: false },
};

let product2: Product<{ available: boolean; inTop: boolean }, string[]> = {
  id: 22,
  color: ["blue", "red"],
  info: { available: true, inTop: true },
};

/* ==========   Example  1 ==============
Cтворити type helper який буде отримуввати 
 певний тип і повертати його  
 */

type ReturnWhatIPassIn<T> = T;

type TP1 = ReturnWhatIPassIn<1>; // тип має бути 1
type TP2 = ReturnWhatIPassIn<"1">; // тип має бути "1"
type TP3 = ReturnWhatIPassIn<true>; // тип має бути true
type TP4 = ReturnWhatIPassIn<false>; // тип має бути false
type TP5 = ReturnWhatIPassIn<null>; // тип має бути null

/* ==========   Example  2 ==============
Cтворити type helper який буде отримуввати 
 певний тип і повертати union type  
       переданий_тип | null | undefined    
 */
type Maybe<T> = T | null | undefined;

type TM1 = Maybe<string>; // string | null | undefined
type TM2 = Maybe<number>; // number | null | undefined
type TM3 = Maybe<boolean>; // boolean | null | undefined
type TM4 = Maybe<null>; //  null | undefined

/* ==========   Example 2  ====================*/

type PersonInterface = {
  id: number;
  login: string;
  active: boolean;
  phones: string[];
};

const user: PersonInterface = {
  id: 10,
  login: "admin",
  active: true,
  phones: ["111", "222"],
};

function prop<T, K extends keyof T>(ob: T, key: K): T[K] {
  return ob[key];
}

const id = prop(user, "id");
const login = prop(user, "login");
const active = prop(user, "active");
const phones = prop(user, "phones");

type LoginAndActive = PersonInterface["login" | "active"];

function myFunc(a: number, b: number) {
  return a + b;
}
type ReturnedType = ReturnType<typeof myFunc>;
type FnParamsType = Parameters<typeof myFunc>;
/* 
======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
tasks_2/01_task.ts
tasks_2/02_task.ts
tasks_2/03_task.ts
tasks_2/04_task.ts
tasks_2/05_task.ts
==================================================================
*/

/*  ===================  explain infer 
infer allows you inside in scope over conditional check
to pattern match against the thing you checking
and extract that in new type variable
------------------------------------------ 

tasks_2/06_task.ts
tasks_2/07_task.ts
tasks_2/08_task.ts
tasks_2/09_task.ts
==============  */
