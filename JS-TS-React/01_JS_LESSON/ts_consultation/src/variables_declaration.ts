/*  📣 ======== 1. Variable declaration ======== */

/*  types 
string, boolean, number, array, enum, union, any, void
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

/*  📣 ======== 3. Object type ======== */

function printWatch(watch: {
  make: string;
  year: number
}) {
  console.log(`${watch.make} ${watch.year}`);
}

printWatch({ make: "Constantin Vacheron", year: 2023 });

/*  📣 ======== 4. Захоплення типів  ======== */

const userOb = {
  name: "Bill",
  age: 68,
  company: "Microsoft",
};

let newUserOb: typeof userOb;


/*  📣 ======== 5. Arrays ======== */
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


/*  📣 ======== 6. Tuple ======== */
/* це по суті масив з обмеженим length  */
let myTuple: [number, string, boolean] = [34, "Hello", false];

//@ts-expect-error
myTuple = [1, 2, 3] // Error

// Но push краще не застосовувати з tuple
myTuple.push(1, 2, 3, 4); // OK -> 1,2,3,4 додадуться в tuple
console.log(myTuple);


/*  📣 ======== 7. Custom type ======== */

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

function FlyOverWater(bird: Duck) { }

FlyOverWater(probablyADuck); // OK

/* Синтаксис для масивів */
interface MyArrInterface {
  [index: number]: string;
}

let arrOfStrings: MyArrInterface = ["first", "second"];

//----  але наприклад, якщо для такого типу викликати map - буде помилка
// @ts-expect-error
arrOfStrings.map() // ERROR  Property 'map' does not exist on type 'MyArrInterface'

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
  birthDay: Date
}


const primaryContact:Contact = {
  id: 22,
  name: "Jim",
  birthDay: new Date("10-05-2020")
}

/* =================== type aliases  */
type Employee = {
  id: number;
  name: string;
};
let employee: Employee = {
  id: 0,
  name: "Bill",
}


/*  📣 ======== 8. Literal types ======== */

/*  Literal type  */

type AnimationType = {
  delay: number;
  type: string;
};

function animate(opts: AnimationType) {}



/*  📣 ======== 9. Index signatures ======== */

const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: "+8", area: "096", number: "652-4515" },
  work: { country: "+8", area: "060", number: "752-5856" },
  fax: { country: "+8", area: "048", number: "525-4357" },
};

phones.fax;



/*  📣 ======== 10. Union Type ======== */
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


const routeToAdminPage(role: string) => {}
const routeToHomePage(role: string) => { }

function redirect(usr: Admin | User) {}


/*  📣 ======== 11. void ======== */

/* ------------- callable type  */
interface TwoNumCalculation  {
  (x: number, y:number): number
}

type TwoNumCalc = (x: number, y: number) => number;

/* ------ usage  */
const sum: TwoNumCalc = (a, b) => a + b 
const subtract: TwoNumCalc = (a, b) => a -  b 


/* ------------- void  */

function firstFn(callback: () => undefined) {
  setTimeout(callback, 2000);
}

function secondFn(callback: () => void) {
  setTimeout(callback, 3000);
}

const nums: number[] = [];

// @ts-expect-error
firstFn(() => nums.push(4)); // 🚨 ERROR
// @ts-expect-error
secondFn(() => nums.push(4)); // ✔️ OK


/*  📣 ======== 12. Top types  any, unknow, never ======== */

function processEvents() {
  while (true) {
    // todo
  }
}

processEvents();
console.log("Hello"); //  Цей код буде недосяжним
// І компілятор нічого не скаже про це

function reject(message: string) {
  throw Error(message);
}

reject("hello");
console.log("..."); //  ми не бачимо, що строка unreachable

/* ==========================  */
enum ShirtSize {
  S,
  M,
  L,
}

function print(size: ShirtSize) {
  switch (size) {
    case ShirtSize.S:
      return "small";
    case ShirtSize.M:
      return "medium";
    case ShirtSize.L:
      return "large";
  }
}

