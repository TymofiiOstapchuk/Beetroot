/*
1. Написати функцію groupVotes, яка буде получати в аргумент
масив votes та повертати масив унікальних значень  
2. Провести сортування отриманого масива за кількістю їх входжень
Результат має бути таким  [react, vue, angular]
*/

const votes = [
  "angular",
  "react",
  "vue",
  "react",
  "angular",
  "react",
  "vue",
  "react",
  "vue",
];

function groupVotes(list) {
  // todo
}

const votesOb = getVotes(votes);
const votesArr = sort(votesOb);

console.log(votesArr); // [react, vue, angular]
