class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }

  static average(arr) {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty.");
    }

    const sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
  }

  static max(arr) {
    return Math.max.apply(null, arr);
  }
}

console.log(ArrayUtils.average([1, 3, 4]));
console.log(ArrayUtils.max([1, 2, 3, 4, 5, 6, 7]));
