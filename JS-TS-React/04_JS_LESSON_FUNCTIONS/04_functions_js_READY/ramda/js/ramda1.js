import { products } from "./data.js";
// import { filter, T, project, pick, map, pluck, pipe, uniq } from "./ramda.js";
import {
  filter,
  T,
  __,
  pluck,
  pipe,
  uniq,
  where,
  equals,
  lt,
  project,
} from "./ramda.js";

/* ========================= Task 1 =====================  */
/* отримати масив з значеннями поля category кожного обєкта */

/* const getCats = pluck("category");
console.log(getCats(products)); 
*/

/* const res = products.map((item) => ({
  name: item.name,
  price: item.price,
}));

console.log(res);
 */
/* 
const res = products.map(pick(["name", "price"]));
console.log(res);
 */

/* const getNameAndPrice = map(pick(["name", "price"]));
console.log(getNameAndPrice(products));
 */

/* const getNameAndPrice = project(["name", "price"]);
console.log(getNameAndPrice(products));
 */
/* ========================= Task 2 =====================  */
/* Отримати новий масив із властивостями name, price */

/* ========================= Task 3 =====================  */
/*  Показати фільтрацію продуктів із використанням 
    filter, pluck,  where({...}),  equals(st), lt(__, amont)  
     category ->  clothes, stock < 50, price  < 100
 */
/* 
const predicate = (prod) => prod.category === "clothes";
const getResults = pipe(filter(predicate), pluck("name"));

console.log(getResults(products));
 */

const predicate = where({
  category: equals("clothes"),
  stock: lt(__, 50),
  price: lt(__, 100),
});

// const getResults = pipe(filter(predicate), pluck("name"));
const getResults = pipe(filter(predicate), project(["name", "price"]));
console.log(getResults(products));
