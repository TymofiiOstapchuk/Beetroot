/*
Написати функцію, яка буде получати в аргумент масив votes
та повертати масив унікальних значень відсортированих 
за кількістю їх входжень в в масив votes
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

function getVotes(list) {
  const ob = list.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return ob;
}

const votesOb = getVotes(votes);
const votesArr = Object.keys(votesOb).sort((a, b) => votesOb[b] - votesOb[a]);

console.log(votesArr); // [react, vue, angular]
