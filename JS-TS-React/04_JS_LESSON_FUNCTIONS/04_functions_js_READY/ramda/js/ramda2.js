import { users } from "./data.js";
import {
  sortWith,
  ascend,
  descend,
  prop,
  toLower,
  uniq,
  pluck,
  pipe,
  sort,
} from "./ramda.js";
/* ========================= Task 1 =====================  */
/*  Провести групування  users по age */

const sortByAge = sort((a, b) => a - b);

const getItems = pipe(pluck, uniq, sortByAge);

console.log(getItems("age", users));

/* ========================= Task 2 =====================  */
/* Провести сортування  users  по декількох полях
 при цьому  по  зменшенню -  desc чи зростанню  -  asc */
const sortUsers = sortWith([
    ascend(pipe(prop("name"), toLower)),
    descend(prop("height"))
]);
console.log(sortUsers(users))