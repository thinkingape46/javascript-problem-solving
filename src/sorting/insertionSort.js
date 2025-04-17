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
      if (ele < arr[j] || (comparator && comparator(arr[j], ele) > 1)) {
        arr.splice(i, 1);
        arr.splice(j, 0, ele);
        break;
      }
    }
  }

  //   console.log(JSON.stringify(arr), arrLen, count);
  return arr;
}

console.log(
  JSON.stringify(insertionSort([4, 20, 12, 10, 7, 9])) ===
    JSON.stringify([4, 7, 9, 10, 12, 20])
); // [4, 7, 9, 10, 12, 20]
console.log(
  JSON.stringify(insertionSort([0, -10, 7, 4])) ===
    JSON.stringify([-10, 0, 4, 7])
);
console.log(
  JSON.stringify(insertionSort([1, 2, 3])) === JSON.stringify([1, 2, 3])
);
console.log(JSON.stringify(insertionSort([])) === JSON.stringify([]));
console.log(
  JSON.stringify(
    insertionSort([
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
      4342, 32,
    ])
  ) ===
    JSON.stringify([
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
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

console.log(
  JSON.stringify(insertionSort(kitties, strComp)) ===
    JSON.stringify(["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"])
);
// insertionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(JSON.stringify(insertionSort(moarKittyData, oldestToYoungest)));
