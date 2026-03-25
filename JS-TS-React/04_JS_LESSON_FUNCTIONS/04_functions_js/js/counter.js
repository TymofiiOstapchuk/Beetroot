function makeCounter() {
  let c = 0;
  return function () {
    return c++;
  };
}