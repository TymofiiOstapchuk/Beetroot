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
  if (lang === "en") {
    console.log(`Hello ${name}`);
  }
  if (lang === "es") {
    console.log(`Hola ${name}`);
  }
}

greet("en");
name = "Rodrigo";
greet("es");
