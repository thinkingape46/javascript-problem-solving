function insertionSort(arr, comparator) {
  const arrLen = arr.length;

  let count = 0;

  if (arrLen <= 1) {
    return arr;
  }

  for (let i = 0; i < arrLen; i++) {
    const ele = arr[i];

    for (let j = 0; j < i; j++) {
      count++;

      const innerEle = arr[j];

      if (ele < innerEle || (comparator && comparator(innerEle, ele) > 1)) {
        arr.splice(i, 1);
        arr.splice(j, 0, ele);
        break;
      }
    }
  }

  return arr;
}

// Testing

console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4]));
console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([]));
console.log(
  insertionSort([
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32,
  ])
);

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(JSON.stringify(insertionSort(kitties, strComp)));

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(insertionSort(moarKittyData, oldestToYoungest));
