// Object.assign(targetOb, sourseObj, ....);
// Копіює значення всіх перерахованих own property
// з одного або декількох джерел в цільовому об'єкті targeOb,
// який і повертає

// ================== No delete
let x = { x: 12 };
let y = { y: 22 };
let z = { x: 555 };
var firstName, age;
var arr = [10, 20, 30];
var a, b, c;
var ob = { firstName: "John", age: 33 };
// ================================ //

var ob = Object.assign({}, x, y);
console.log(ob);

// властивості перезаписуються значеннями джерел,
// які розташовані правіше за виклику Object.assign();

/*
ob = Object.assign({}, x, y, z);
 console.log("x -> ", x);
 console.log("y -> ", y);
 console.log("z -> ", z);
console.log(ob);
*/

/*
ob = Object.assign({}, x, y, z, {x: "Hello", y: "word"});
console.log("x -> ", x);
console.log("y -> ", y);
console.log("z -> ", z);
console.log("ob -> ", ob);
*/

// синтаксис деструктивного присвоєння об'єктів
// !!! імена змінних повинні збігатися з іменами властивостей об'єкта
/*

({firstName, age} = ob );
console.log(`${firstName} has ${age} years old`);
*/

// Якщо все ж таки треба змінити імена змінних, то робити треба так
/*
let x, y;
({ firstName: x, age: y } = ob );
console.log(`${x} has ${y} years old`);
*/

// Використання деструктивного присвоєння об'єктів як параметра функції
/*
function foo({ a, b, c }) {
  console.log(a, b, c);
}
foo({ a: "This", b: "is", c: "desttucing" });
*/

/*
function log(msg, {course: courseName, publisher: publisherName}) {
    console.log(`${msg}  ${courseName} by ${publisherName}`);
}

log("Course", {course: 'JS Advanced', publisher: 'Beetroot academy' });
*/

/*
var courseOb = {
    name: "JavaScript Advanced",
    publisher: 'Beetroot academy'
};
function courseDetails(ob){
    let {name, publisher, price = 44} = ob;
    console.log(`Course ${name} published by ${publisher}, price - ${price}`
    );
}
courseDetails(courseOb);
*/

/*
var obData = {
     name: 'Tom',
     age: 22,
     phones: [111, 333],
     count:20
};
function getData({ name, phones: [homePhone, workPhone] }) {
  console.log("name -> ", name);
  console.log("home phone -> ", homePhone);
  console.log("work phone -> ", workPhone);
}
getData(obData);
*/

// ************ Destruct + Rest  объектов ****************** //
// Rest properties з destruct - збирають ті, що залишилися від destruct
// властивості об'єкта на новий об'єкт

/*
var { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
*/

//Spread properties в об'єкті ініціалізують копіювання
// властивостей з об'єкта новий об'єкт.

/*
var { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
console.log(n);  // { x: 1, y: 2, a: 3, b: 4 }
*/

/*
let o1 = {
    name: 'Tom',
    age: 22
};
let o2 = {
    phone: 333

};

ob = { ...o1, ...o2};
console.log(ob);

// при цьому однойменні властивості перезаписуються за правилом
// Пріоритет у правої однойменної властивості

let o3 = {
    age: 33
};

ob = { ...o1, ...o2, ...o3};
console.log(ob);  // age:33
*/

/*
function getObj(){
    return {
        name: 'John',
        color: 'red',
        position: 'Front-end developer',
        state: 'New York'
    };
}

var {name, state} = getObj();
console.log(name);
console.log(state);
*/

/*
var people = [
    {
        firstName: 'Tom',
        lastName: 'Joe',
        phone: 111222,
        email: "tom@gmail.com"
    },
    {
        firstName: 'Pete',
        lastName: 'Joe',
        phone: 221122,
        email: "pete@yahoo.com"
    },
    {
        firstName: 'Sarah',
        lastName: 'Parker',
        phone: 777666,
        email: "parker@gmail.com"
    },
    {
        firstName: 'Bill',
        lastName: 'Smith',
        phone: 777888,
        email: "bill@ukr.net"
    }
];
*/

//people.forEach( ({firstName}) => console.log(firstName));

/*
var [, Pete] = people;
function logEmail({email}){
    console.log(email)
}
logEmail(Pete);
*/
