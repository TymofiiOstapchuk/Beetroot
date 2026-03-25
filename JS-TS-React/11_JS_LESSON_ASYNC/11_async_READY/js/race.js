function after(ms, name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}

function timeout(ms, promise) {
  let timeId;
  const tp = new Promise((_, reject) => {
    timeId = setTimeout(() => reject(Error(`settimout ${ms}`)), ms);
  });
  return Promise.race([promise, tp]).finally(() => {
    clearTimeout(timeId);
  });
}

const pA = after(1500, "A");

timeout(500, pA)
  .then(console.log)
  .catch((err) => console.log("Error: ", err.message));
