let app = (function () {
  const users = [];

  function addUser(user) {
    users.push(user);
  }

  function print() {
    console.log(users);
  }
})();

// Питання - як отримати доступ до функцій addUser, print ?
