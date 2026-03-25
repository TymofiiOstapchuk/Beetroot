export function generateId() {
  return Math.round(Date.now() + Math.random() * 1e8).toString(36);
}
/* ================ notify   */

export const notify = {
  usedArr: new Array(10),
  getLen() {
    const len = this.usedArr.length;
    for (let i = 0; i < len; i++) {
      if (!this.usedArr[i]) {
        this.usedArr[i] = true;
        return i;
      }
    }
  },
  show(msg, settings = {}) {
    const currentClasses = {
      bgClass: "alert-primary",
      duration: 1000,
      delay: 2000,
    };
    const { bgClass, duration, delay } = { ...currentClasses, ...settings };

    const el = document.createElement("div");
    el.className = "notify-box alert";
    el.classList.add(`${bgClass}`);
    el.style.transition = `transform ${duration}ms`;
    el.innerHTML = msg;
    document.querySelector("body").appendChild(el);

    const len = this.getLen();
    el.style.top = len * el.offsetHeight + "px";

    requestAnimationFrame(() => {
      el.classList.add("show-notify");

      setTimeout(() => {
        el.classList.remove("show-notify");
        setTimeout(() => {
          el.parentNode.removeChild(el);
          this.usedArr[len] = false;
        }, `${duration + 300}`);
      }, `${delay}`);
    });
  },
};

/* ================ local storage  */
export const backupRepo = {
  set(ob, key) {
    localStorage.setItem(key, JSON.stringify(ob));
  },
  get(key) {
    const ob = localStorage.getItem(key);
    return ob ? JSON.parse(ob) : null;
  },
  has(key) {
    return localStorage.getItem(key) ? true : false;
  },
  delete(key) {
    localStorage.removeItem(key);
  },
};

/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */

export const productsOb = {
  1: { id: 1, title: "product 1", price: 30 },
  2: { id: 2, title: "product 2", price: 40 },
  3: { id: 3, title: "product 3", price: 50 },
  4: { id: 4, title: "product 4", price: 10 },
};

const cats = [
  { id: 1, title: "Category 1" },
  { id: 2, title: "Category 2" },
  { id: 3, title: "Category 3" },
];

const subcats = [
  { id: 1, catid: 1, title: "Subcat 1_1" },
  { id: 2, catid: 1, title: "Subcat 1_2" },
  { id: 3, catid: 1, title: "Subcat 1_3" },
  { id: 4, catid: 1, title: "Subcat 1_4" },
  { id: 5, catid: 2, title: "Subcat 2_5" },
  { id: 6, catid: 2, title: "Subcat 2_6" },
  { id: 7, catid: 2, title: "Subcat 2_7" },
  { id: 8, catid: 3, title: "Subcat 3_7" },
  { id: 9, catid: 3, title: "Subcat 3_7" },
  { id: 10, catid: 3, title: "Subcat 3_7" },
];
