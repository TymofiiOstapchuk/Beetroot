let product1 = { id: 12, color: "red" };
let product2 = { id: 22, color: ["blue", "red"] };

/* ==========   Example  1 ==============
Cтворити type helper який буде отримуввати 
 певний тип і повертати його  
 */

type ReturnWhatIPassIn = unknown;

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
type Maybe = unknown;

type TM1 = Maybe<string>; // string | null | undefined
type TM2 = Maybe<number>; // number | null | undefined
type TM3 = Maybe<boolean>; // boolean | null | undefined
type TM4 = Maybe<null>; //  null | undefined

/* ==========   Example 2  ====================*/

type PersonInterface = {
  id: number;
  login: string;
  active: boolean;
};

const user: PersonInterface = {
  id: 10,
  login: "admin",
  active: true,
};

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
