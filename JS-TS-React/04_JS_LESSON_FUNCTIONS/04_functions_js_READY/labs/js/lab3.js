import { curry, __ } from "./ramda.js";

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const fn = curry((el, evt, color) =>
  el.addEventListener(evt, (e) => (e.target.style.backgroundColor = color))
);
// f(a,b,c) => f(a)(b)(c)
/* const curry = (fn) => {
  return (...args) => {
    return fn.bind(null, ...args);
  };
};
 */

/* ====== usage */
/* const b1 = curryFn(box1, "click");
b1("red");

const b2 = curryFn(box2);
b2("mouseover", "yellow");
b2("mouseout", "red");
 */

const boxRed = fn(__, "mouseover", __);

boxRed(box1, "yellow");

const myBox = fn(box1, __, "red");
myBox("click");

const b2 = fn(box2, __, __);
b2("click", "yellow");
b2("mouseover", "red");
b2("mouseout", "transparent");
