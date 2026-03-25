// Два способа создания регулярного выражения
// Методы regexp
// flags
// dot pattern  -> \n, flag s,  \.
// character set, meta symbols in set, negate set
// character class, pattern, negate class ranges
// str = "Єдина країна test"
// Cyrillic -> [a-яёїєі],  [Ѐ-Ӿ],  [\u0400-\u04FF]
// quantity
// grouping pattern, alternation, pocket
// lazy quantity
// lookahead  ?=, ?! */
// word boundary \b, \B

const el = document.getElementById("regpre");
const out = (st, re) =>
  (el.innerHTML = st.replace(re, (st) => `<span>${st}</span>`));

/* ==================================  */
let st = `Is this string, is it?`;

st = `Cat sat on the hat ?At`;

const re = /at/gi;

out(st, re);
