class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
  getHypotenuse() {
    return (this.base ** 2 + this.height ** 2) ** 0.5;
  }
}

const t1 = new Triangle(3, 4);

console.log(t1.__proto__ === Triangle.prototype);

console.log(t1.getArea());
console.log(t1.getHypotenuse());

export default Triangle;
