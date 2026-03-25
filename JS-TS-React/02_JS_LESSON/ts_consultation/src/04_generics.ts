let product1 = { id: 12, color: "red" };
let product2 = { id: 22, color: ["blue", "red"] };

/* ==========   Example  1 ====================*/

type PersonInterface = {
  id: number;
  login: string;
  active: boolean;
};

const user: PersonInterface = {
  id: 10,
  login: "admin",
  active: true,
};
/* ==========   Example  2 ====================*/

{
  function generateId(seed: number) {
    return seed + 5;
  }
  function lookupEntry(id: number) {
    // query todo
  }

  lookupEntry(generateId(5));
}
