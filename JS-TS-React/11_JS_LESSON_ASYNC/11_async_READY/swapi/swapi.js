// https://swapi.dev/documentation

const URL = "http://swapi.dev/api/";
// #region Setup
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

function timeout(ms, promise) {
  let timeId;
  const tp = new Promise((_, reject) => {
    timeId = setTimeout(() => reject(Error(`settimout ${ms}`)), ms);
  });
  return Promise.race([promise, tp]).finally(() => {
    clearTimeout(timeId);
  });
}

function getTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `<div>${film.episode_id} ${film.title}</div>`)
    .join("");
}

function queryApi(endpoint) {
  return fetch(URL + endpoint).then((r) => {
    return r.ok ? r.json() : Promise.reject("Unsuccessfull response");
  });
}
output.innerHTML = "Loading ...";

//#endregion

async function main() {
  try {
    const [{ results: films }, { results: planets }] = await Promise.all([
      queryApi("films"),
      queryApi("planets"),
    ]);
    output.innerHTML = `<h1>Films: ${films.length}, Planets: ${planets.length}</h1>`;
  } catch (err) {
    console.log(err);
    output.textContent = "Oops";
  } finally {
    spinner.remove();
  }
}

main();

/* Promise.all([queryApi("films"), queryApi("planets")])
  .then(([{ results: films }, { results: planets }]) => {
    output.innerHTML = `<h1>Films: ${films.length}, Planets: ${planets.length}</h1>`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    spinner.remove();
  }); */

/* timeout(300, fetch(URL + "films"))
  .then((r) => {
    if (!r.ok) {
      throw Error("Unsuccessfull response");
    }

    return r.json();
  })
  .then(({ results: films }) => {
    output.innerHTML = getTitles(films);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    spinner.remove();
  });
 */
