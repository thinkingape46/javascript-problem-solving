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

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be less than zero.");
    }
    this._radius = value;
    return this._radius;
  }
}

const c = new Circle(10);

c.radius = 5;
console.log(c.diameter);
console.log(c.area);
console.log(c.perimeter);
console.log(c._radius);
