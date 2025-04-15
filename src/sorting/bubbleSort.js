function bubbleSort(arr) {
  let arrLen = arr.length;

  if (arrLen <= 1) {
    return arr;
  }

  let count = 0;
  let swapped = false;

  for (let i = 0; i < arrLen; i++) {
    swapped = false;
    for (let i = 0; i < arrLen - 1; i++) {
      count++;

      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i] + arr[i + 1];
        arr[i + 1] = arr[i] - arr[i + 1];
        arr[i] = arr[i] - arr[i + 1];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([2, 3, 7, 4, 2, 8, 4, 3]));
console.log(bubbleSort([42, 7, 85, 19, 63, 28, 94, 3, 56, 71, 1]));
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log(bubbleSort([11, 12, 22, 25, 34, 64, 90]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]));
