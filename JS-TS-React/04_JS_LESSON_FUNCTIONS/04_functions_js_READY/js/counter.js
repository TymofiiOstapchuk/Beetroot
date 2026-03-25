function makeCounter() {
  let c = 0;

  return function () {
    return c++;
  };
}

const c1 = makeCounter();
c1();
c1();
c1();
console.log(c1());

const c2 = makeCounter();
c2();
console.log(c2());

/* function makeCounter() {
  let c = 0;

  return {
    set(val) {
      c = val;
    },
    get() {
      return c;
    },
    reset() {
      c = 0;
    },
    next() {
      if (this.get() === 3) {
        this.set(0);
      }
      c++;
    },
    print() {
      console.log(c);
    },
  };
}

const c = makeCounter();
const c1 = makeCounter();
c.next();
c.next();
c.next();
c.next();
c.next();
c.print();

c1.next();
c1.print();
 */

/* function makeCounter() {
  let c = 0;
  function counter() {
    return ++c;
  }

  counter.get = function () {
    return c;
  };
  counter.set = function (val) {
    c = val;
  };
  counter.print = function (val) {
    console.log(c);
  };

  return counter;
}

const c = makeCounter();
c();
c();
c();
c.set(10);
c();
c.print();
 */
