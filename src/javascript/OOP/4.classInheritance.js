import Triangle from "./3.classes";

class TTWo extends Triangle {
  constructor(base, height, name) {
    super(base, height);
    this.name = name;
  }

  getPerimeter() {
    return 3 * this.base;
  }
}

const t2 = new TTWo(3, 4, "Inherited triangle");

console.log(t2);
