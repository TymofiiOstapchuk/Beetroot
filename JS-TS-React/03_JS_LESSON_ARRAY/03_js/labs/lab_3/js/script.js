/* 
  1. Вивести в <tbody id="players"> таблиці список користувачів
     Використовувати innerHTML
  2. Здійснити сортування гравців (рядок таблиці)
      за зростанням (за спаданням) score
      при click на відповідній стрілці
      
  Для цього на відповідні стрілки (id="sort-down", id="sort-up")
  призначені події onclick та відповідні обробники подій - функції sortPlayersDown, sortPlayersUp
  Необхідно реалізувати ці функції 

  3.  Завдання слухачам - реалізувати сортирування ігроків по name 
    click по sortNameDown - сортирує по алфавіту від  а до я 
    click по  sortNameUp - сортирує по алфавіту від  я до а
 */

const users = [
  { id: 1, name: "Bill Geitz", score: 34 },
  { id: 2, name: "Tom Cruise", score: 12 },
  { id: 3, name: "Paul McCartney", score: 45 },
  { id: 4, name: "Cat Tom", score: 20 },
  { id: 5, name: "Ashley Wildcat", score: 66 },
  { id: 6, name: "Sasha Grey", score: 10 },
  { id: 7, name: "Dan Abramov", score: 110 },
];
const players = document.getElementById("players");
const sortDown = document.getElementById("sort-down");
const sortUp = document.getElementById("sort-up");
const sortNameDown = document.getElementById("sort-name-down");
const sortNameUp = document.getElementById("sort-name-up");
