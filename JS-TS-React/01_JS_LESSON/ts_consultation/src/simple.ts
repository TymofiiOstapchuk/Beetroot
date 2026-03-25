

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export async function sum(a: number, b: number) {
  await sleep(500);
  return a + b;
}

(async () => {
  console.log(await sum(3, 4));
})();
