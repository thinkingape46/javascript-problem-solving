console.clear();

let triangle = {
  b: 3,
  h: 4,
  getArea: function () {
    return 0.5 * this.b * this.h;
  },
  getHypotenuse: function () {
    return (this.b ** 2 + this.h ** 2) ** 0.5;
  },
};

console.log(triangle.getArea());
console.log(triangle.getHypotenuse());
