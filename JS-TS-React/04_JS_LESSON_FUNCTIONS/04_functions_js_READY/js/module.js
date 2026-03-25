const app = (function () {
  const users = [];

  function addUser(user) {
    users.push(user);
  }

  function print() {
    console.log(users);
  }
  return { addUser, print };
})();

app.addUser("Bill");
app.addUser("Fill");
app.print();

// Питання - як отримати доступ до функцій addUser, print ?
