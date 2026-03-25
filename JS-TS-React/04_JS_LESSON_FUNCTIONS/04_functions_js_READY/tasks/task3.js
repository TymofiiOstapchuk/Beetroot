import { curry, __ } from "../labs/js/ramda.js";

const log = curry((title, msg) => {
  console.log(`${title}: ${msg}`);
});

const l1 = log("Warning");
const l2 = log("Notice");
const l3 = log("Notice");

l1("message 1");
l2("message 2 ");
l3("message 3 ");
