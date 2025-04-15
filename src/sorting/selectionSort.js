function selectionSort(arr) {
  const arrLen = arr.length;

  let count = 0;

  if (arrLen <= 1) {
    return arr;
  }

  let index = 0;
  let smallestIndex = 0;

  while (index < arrLen) {
    for (let i = index; i < arrLen; i++) {
      count++;

      if (arr[smallestIndex] > arr[i]) {
        smallestIndex = i;
      }
    }

    let temp = arr[index];
    arr[index] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    index++;
    smallestIndex = index;
  }

  return arr;
}

console.log(selectionSort([2, 3, 7, 4, 2, 8, 4, 3]));
console.log(selectionSort([42, 7, 85, 19, 63, 28, 94, 3, 56, 71, 1]));
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
console.log(selectionSort([11, 12, 22, 25, 34, 64, 90]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7]));
