// ================== No delete
var arr = [10, 20, 30];
var a, b, c;
var ob = { firstName: "John", age: 33 };

/*  ============ destruct arrays ===========  */

//Деструктивне присвоєння дозволяє змінним присвоювати
// значення масивів або властивості об'єктів

/*
[a,b,c] = arr;
console.log(a,b,c);
*/

// або можна так привласнювати

/*
[a,b,c] = [33,44,55];
console.log(a,b,c);
*/

// Деструктурування результату яке повертається функцією
/*
function foo() {
    return [33,44,55];
}
[a,b,c] = foo();
console.log(a, b, c);
*/

// Ігнорування значень
/*
[a,,b] = arr;
console.log(a,b);
*/

/*
var coords = "23.222333 - 44.333444";
var [lat, lng] =  coords.split(' ');
console.log(lat, lng); //не то что хотели
*/

/*
// Ось так буде правильно
[lat, ,lng] =  coords.split(' ');
console.log(lat, lng);
*/

// Використання spread у деструктивних виразах
/*
[a, ...b] = [1,2,3,4,5,6];
console.log(a, b);
console.log("b is array: ", Array.isArray(b));
*/

// Ігнорування значень
/*
[a,,, ...b] = [1,2,3,4,5,6];
console.log(a, b);
*/

// Можна використовувати в деструктивних виразах значення за промовчанням
/*
[a, b, c = 1000] = [11,22];
console.log(a, b, c);
*/

// Destructing nested array
/*
var nums = [10, 20, [30, 40, 50]];
var [firstNum, secondNum, [thirdNum, , fifthNum] ] = nums;
console.log(firstNum, secondNum, thirdNum, fifthNum);
*/

// Використання деструктивного присвоєння як параметра функції
/*
function test([a,b, c = '!!!']) {
    console.log(a,b,c);
}
test(['Hello', 'ES2015']);
*/

/*
var  nums = [10,20,30,40,50];
function showNums([a,b, ...c]){
    console.log(a);
    console.log(b);
    console.log(c);
}
showNums(nums);
*/
