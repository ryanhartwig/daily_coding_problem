interface Test {
  a: any;
}
class Test {
  constructor() {
    this.a = 'a';
  }

  logSomething() {
    console.log('smoething');
  }

  getB() {
    return this.a
  }
}

class TestB extends Test {
  constructor() {
    super();
    this.a = 'b'
  }

  getA() {
    return super.getB();
  }
}

const b = new TestB();


console.log(b.getA())