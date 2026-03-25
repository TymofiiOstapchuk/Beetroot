/*  В цьому коді засмічується глобальна область змінною name
Як за допомогою closures зробити так, щоб позбавитись від 
змінної  name в глобальній області ? 
====== usage 
const fEn = greet("en");
const fEs = greet("es");
fEn("Bill");
fEs("Rodrigo");
*/

let name = "Bill";

function greet(lang) {
  return function (name) {
    if (lang === "en") {
      console.log(`Hello ${name}`);
    }
    if (lang === "es") {
      console.log(`Hola ${name}`);
    }
  };
}

const fEn = greet("en");
fEn("Bill");
fEn("Tom");

const fEs = greet("es");
fEs("Rodrigo");
fEs("Pedro");
