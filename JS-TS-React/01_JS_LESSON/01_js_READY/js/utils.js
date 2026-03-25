function getDate() {
  const d = new Date();
  return `Today ${d.getDate()}.${normalizeDate(
    d.getMonth() + 1
  )}.${d.getFullYear()}`;
}

const normalizeDate = (d) => (d < 9 ? "0" + d : d);
