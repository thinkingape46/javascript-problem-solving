function selectionSort(arr) {
  const arrLen = arr.length;

  let count = 0;

  if (arrLen <= 1) {
    return arr;
  }

  let smallestIndex = 0;

  for (let i = 0; i < arrLen; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      count++;

      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    smallestIndex = i + 1;
  }

  console.log([arr, { arrLen, count, sigma: arrLen * 0.5 * (arrLen + 1) }]);

  return arr;
}

console.log(selectionSort([2, 3, 7, 4, 2, 8, 4, 3]));
console.log(selectionSort([42, 7, 85, 19, 63, 28, 94, 3, 56, 71, 1])); // [1, 3, 7, 19, 28, 42, 56, 63, 71, 85, 94]
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
console.log(selectionSort([11, 12, 22, 25, 34, 64, 90]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7]));
