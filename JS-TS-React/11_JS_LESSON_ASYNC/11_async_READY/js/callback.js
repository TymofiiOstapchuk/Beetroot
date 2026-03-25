/* const pizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Your pizza is ready ))");
    reject("there were problems");
  }, 3000);
});

pizza.then(console.log).catch(console.log);
 */
console.log("Start");

getUser(1)
  .then((user) => {
    console.log(user);
    return getRepos(user);
  })
  .then(console.log)
  .catch(console.log);
console.log("Finish");

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Bill" }), 2000);
  });
}

function getRepos(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(["repo1", "repo2", "repo3"]);
      reject("Nothing to read");
    }, 2000);
  });
}
