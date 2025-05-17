class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return 2 * this._radius;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }

  get perimeter() {
    return 2 * Math.PI * this._radius;
  }
}

const c = new Circle(10);

console.log(c.diameter);
console.log(c.area);
console.log(c.perimeter);
console.log(c._radius);
