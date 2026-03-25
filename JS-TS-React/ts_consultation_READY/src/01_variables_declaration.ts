/*  📣 ======== 1. Variable declaration ======== */

/*  types
string, boolean, number, array, enum, union, any, void, never
*/

//---- Types inference - якщо не визначемо явно тип - його виводить TS
let myStr = "this is string";

// @ts-expect-error
myStr = 10; // Error

// Тут також працює inference - функція поверне string
function getStr() {
  return "Hello ";
}

let newStr = getStr();

function getNum() {
  return 10;
}

// newStr = getNum(); // Error

//---- Types declaration
let greet: string = "Hello TS";

greet = "Another string"; // OK

// greet = 12 // Errror

/* Який тип буде  у константи myConst ?
 Це називається  "string literal type" - значеня константи ніколи не змінюється
 */
const myConst = "I am string";

/* Але це не стосується константів, значення яких є об'єктом.
   Чому? Тому що object є mutable сутністю
 */
const myObj = {
  firstName: "Bill",
};

/* А який тип буде у змінної якщо їй не надати значення  ? */
/*  Тип any це зло. Він за фактом відключає всі подальші перевірки   */
let badType;
badType = 42;
badType = "this string"; // Це дуже погано !!! Адже тип z-any

/*  📣 ======== 2. Function type  ======== */

// @ts-expect-error
function add(a: number, b: number): number {}

add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));

function test(a: number): number {
  return 1;
}

const test1 = function (a: number): string {
  return "Hello";
};

const test3 = (a: number): number => a * 2;

/*  ======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ
1. tasks/01_task.ts
2. tasks/02_task.ts
3. tasks/03_task.ts
*/

/*  📣 ======== 3. Object type ======== */

function printWatch(watch: { make: string; year: number; price?: number }) {
  let st = `${watch.make} ${watch.year}`;

  if (typeof watch.price !== "undefined") {
    st += `${watch.price.toFixed(2)}`;
  }

  // guard
  console.log(st);
}

const myWatch = {
  make: "Constantin Vacheron",
  year: 2023,
  inStock: true,
};

printWatch(myWatch);

/* ======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
  5 => tasks/05_task.ts
  6 => tasks/06_task.ts
*/

/*  📣 ======== 4. Arrays ======== */
/* А який тип буде у порожнього масиву?   any !!!! */
let arr = [];
// @ts-expect-error
arr.push(33);
// @ts-expect-error
arr.push("string"); // теж можна - адже тип any, і перевірка типів вимкнена

/*  Так буде правильно  */
let myArr: number[] = [];
myArr.push(33);
// myArr.push("string") // Error

/* Ще один синтаксис декларування типу array  */
let strArr: Array<string> = ["more", "strings", "here"];

/*  📣 ======== 5. Tuple ======== */
/* це по суті масив з обмеженим length  */
let myTuple: [number, string, boolean] = [34, "Hello", false];

//@ts-expect-error
myTuple = [1, 2, 3]; // Error

// Но push краще не застосовувати з tuple
myTuple.push(1, 2, 3, 4); // OK -> 1,2,3,4 додадуться в tuple
console.log(myTuple);

/* ======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
  7 => tasks/07_task.ts
  8 => tasks/08_task.ts
  9 => tasks/09_task.ts
*/
/* Interfaces - це  колекція визначень властивостей та методів
Використовується принцип  DuckType
    When I see a bird that walks like a duck
    and swims like a duck and quacks like a duck,
    I call that bird a duck
(James Whitcomb Riley)
*/

interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}
// Або методи можна описувати так-> walk(): void

let probablyADuck = {
  walk: () => console.log("walking like a duck"),
  swim: () => console.log("swimming like a duck"),
  quack: () => console.log("quacking like a duck"),
};

function FlyOverWater(bird: Duck) {}

FlyOverWater(probablyADuck); // OK

/* Синтаксис для масивів */
interface MyArrInterface {
  [index: number]: string;
}

let arrOfStrings: MyArrInterface = ["first", "second"];

//----  але наприклад, якщо для такого типу викликати map - буде помилка
// @ts-expect-error
arrOfStrings.map(); // ERROR  Property 'map' does not exist on type 'MyArrInterface'

//----  так буде  нормально
let stringArr: string[] = ["first", "second"];
stringArr.map((item) => console.log(item));

/* ========================= example ========  */
interface Address {
  province: string;
  region: string;
  postalCode: string;
  line1: string;
}

interface Contact {
  id: number;
  name: string;
  birthDay: Date;
}

const primaryContact: Contact = {
  id: 22,
  name: "Jim",
  birthDay: new Date("10-05-2020"),
};

/* =================== type aliases  */
type Employee = {
  id: number;
  name: string;
};
let employee: Employee = {
  id: 0,
  name: "Bill",
};

/*
======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ
10 => tasks/10_task.ts
11 => tasks/11_task.ts
12 => tasks/12_task.ts
 */

/*  📣 ======== 7. Literal types ======== */

/*  Literal type  */

// Це наступний тип
let num: 1 | 2 | 3;
num = 3;

//@ts-expect-error - error
num = 44;

type AnimationType = {
  delay: number;
  type: "ease-in" | "ease-out";
};

function animate(opts: AnimationType) {}

animate({ delay: 100, type: "ease-out" });

type AnimationKeyType = keyof AnimationType; // "delay" | "type"
let a: AnimationKeyType = "delay";

/*  📣 ======== 8. Union Type ======== */
/*  https://en.wikipedia.org/wiki/Union_(set_theory)  */
/*  https://en.wikipedia.org/wiki/Intersection_(set_theory)  */
/*  ==================================  */

let text: string | null | undefined;
text = "this is text";
text = null;
text = undefined;

/* ==========   Example Union Type  ==========  */
type Admin = {
  id: string;
  role: string;
};

type User = {
  email: string;
};

const routeToAdminPage = (role: string) => {};
const routeToHomePage = (role: string) => {};

/* ----- type guarad  */
function isAdmin(user: Admin | User): user is Admin {
  return (user as Admin).role !== "undefined";
}

/* function redirect(user: Admin | User) {
  if (isAdmin(user)) {
    routeToAdminPage(user.role);
  } else {
    routeToHomePage(user.email);
  }
} */

function redirect(user: Admin | User) {
  if ("role" in user) {
    routeToAdminPage(user.role);
  } else {
    routeToHomePage(user.email);
  }
}
/* ================== sidriminated union */
type Result<T> =
  | {
      success: true;
      value: T;
    }
  | {
      success: false;
      error: string;
    };

function tryParseInt(text: string): Result<number> {
  if (/^-?\d+$/.test(text)) {
    return {
      success: true,
      value: parseInt(text, 10),
    };
  }
  return {
    success: false,
    error: "Invalid number format",
  };
}

const resultParse = tryParseInt("33");

if (resultParse.success) {
  resultParse;
} else {
  resultParse;
}

/*  example 2  */
type Cash = {
  kind: "cash";
};
type PayPal = {
  kind: "paypal";
  email: string;
};

type CreditCard = {
  kind: "creditcard";
  cardNumber: string;
  securityCode: string;
};

type PayMethod = Cash | PayPal | CreditCard;

function stringifyPaymentMethod(method: PayMethod): string {
  switch (method.kind) {
    case "cash":
      return "Cash";
    case "paypal":
      return "paypal";
    case "creditcard":
      return "credit card";
  }
}
/* ================ example 3 */

function flip(): "head" | "tail" {
  if (Math.random() > 0.5) return "head";
  return "tail";
}

let flipResult = flip();

function getUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipResult === "head") {
    return ["success", { name: "Paul McCartney", email: "beatles@com" }];
  } else {
    return ["error", new Error("cannot find user")];
  }
}

let userInfo = getUserInfo();

const [first, second] = userInfo;

/* if (second instanceof Error) {
  second.
} else {
  second
} */

/* if (userInfo[0] === "error") {
    userInfo[1].
  } else {
  userInfo[1].
  }
 */

/* ================ mutable  */
/* ============ example 1 */
{
  type ButtonAttributes = {
    type: "button" | "submit" | "reset";
  };

  const type = "button";

  const buttonAttributes: ButtonAttributes = {
    type, // чому тут помилка ?
  };
}
/* ============ example 2 */
{
  type ButtonAttributes = {
    type: "button" | "submit" | "reset";
  };

  // variant 1 - single button
  const modifyButton = (attributes: ButtonAttributes) => {};

  const buttonAttributes: ButtonAttributes = {
    type: "button",
  };

  modifyButton(buttonAttributes);

  // variant 2 - array of buttons attributes
  const modifyButtons = (attributes: ButtonAttributes[]) => {};

  const buttonsToChange: ButtonAttributes[] = [
    {
      type: "button",
    },
    {
      type: "submit",
    },
  ];

  modifyButtons(buttonsToChange);

  type UserType = {
    id: string;
    name: string;
    age: number;
  };
  type ReadOnlyUserType = Readonly<UserType>;

  const user: ReadOnlyUserType = {
    id: "1234",
    name: "Bill",
    age: 22,
  };
  user.id = "12341234123412431234124";
}

/* ======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
01 =>  tasks_1/01_task.ts
02 =>  tasks_1/02_task.ts
03 =>  tasks_1/03_task.ts
04 =>  tasks_1/04_task.ts
05 =>  tasks_1/05_task.ts
*/

/*  📣 ======== 11. void ======== */

/* ------------- callable type  */
interface TwoNumCalculation {
  (x: number, y: number): number;
}

type TwoNumCalc = (x: number, y: number) => number;

/* ------ usage  */
const sum: TwoNumCalc = (a, b) => a + b;
const subtract: TwoNumCalc = (a, b) => a - b;

/* ------------- void  */

function firstFn(callback: () => undefined) {
  setTimeout(callback, 2000);
}

function secondFn(callback: () => void) {
  setTimeout(callback, 3000);
}

const nums: number[] = [];

firstFn(() => nums.push(4)); // 🚨 ERROR

secondFn(() => nums.push(4)); // ✔️ OK
