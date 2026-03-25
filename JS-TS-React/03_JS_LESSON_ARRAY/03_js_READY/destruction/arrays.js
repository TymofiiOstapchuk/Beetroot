// ================== No delete
var arr = [10, 20, 30];
var a, b, c;
var ob = { firstName: "John", age: 33 };

/*  ============ destruct arrays ===========  */

function showNums([a, b, ...c]) {
  console.log(a);
  console.log(b);
  console.log(c);
}
var nums = [10, 20, 30, 40, 50];
showNums(nums);
