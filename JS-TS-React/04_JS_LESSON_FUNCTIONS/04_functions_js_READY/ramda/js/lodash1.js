import { users } from "./data.js";
import {groupBy, orderBy, keys, value, chain} from './lodash.js'


/* ========================= Task 1 =====================  */
/*  Провести групування  users по age */
const ages = chain(users).groupBy('age').keys().value()
console.log(ages)


/* ========================= Task 2 =====================  */
/* Провести сортування  users  по декількох полях
 при цьому  по  зменшенню -  desc чи зростанню  -  asc */

 const res = orderBy(users, ['age', 'height'], ['asc', 'desc']);
 console.log(res)