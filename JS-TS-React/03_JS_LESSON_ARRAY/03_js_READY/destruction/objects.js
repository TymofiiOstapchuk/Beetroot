// Object.assign(targetOb, sourseObj, ....);
// Копіює значення всіх перерахованих own property
// з одного або декількох джерел в цільовому об'єкті targeOb,
// який і повертає

// ================== No delete
var x = { x: 12 };
var y = { y: 22 };
var z = { x: 555 };
var firstName, age;
var arr = [10, 20, 30];
var a, b, c;
var ob = { firstName: "John", age: 33 };
// ================================ //

var people = [
  {
    firstName: "Tom",
    lastName: "Joe",
    phone: 111222,
    email: "tom@gmail.com",
  },
  {
    firstName: "Pete",
    lastName: "Joe",
    phone: 221122,
    email: "pete@yahoo.com",
  },
  {
    firstName: "Sarah",
    lastName: "Parker",
    phone: 777666,
    email: "parker@gmail.com",
  },
  {
    firstName: "Bill",
    lastName: "Smith",
    phone: 777888,
    email: "bill@ukr.net",
  },
];

var [, Pete] = people;

function logEmail({ email }) {
  console.log(email);
}

logEmail(Pete);
