function insertionSort(arr, comparator) {
  const arrLen = arr.length;

  let start = new Date().getTime();
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

  console.table({
    length: arrLen,
    count: count,
    "n^2": arrLen ** 2,
    nLogn: Math.ceil(arrLen * Math.log10(arrLen)),
    time: new Date().getTime() - start,
  });

  return arr;
}

// Testing

// console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(insertionSort([0, -10, 7, 4]));
// console.log(insertionSort([1, 2, 3]));
// console.log(insertionSort([]));
// console.log(
//   insertionSort([
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
//     4342, 32,
//   ])
// );

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   return 0;
// }

// console.log(insertionSort(kitties, strComp));

// var moarKittyData = [
//   {
//     name: "LilBub",
//     age: 7,
//   },
//   {
//     name: "Garfield",
//     age: 40,
//   },
//   {
//     name: "Heathcliff",
//     age: 45,
//   },
//   {
//     name: "Blue",
//     age: 1,
//   },
//   {
//     name: "Grumpy",
//     age: 6,
//   },
// ];

// function oldestToYoungest(a, b) {
//   return b.age - a.age;
// }

// console.log(insertionSort(moarKittyData, oldestToYoungest));
console.log(
  insertionSort([...new Array(200000)].map(Function.call, Math.random))
);
// console.log(insertionSort([...new Array(100).keys()]));
// console.log(
//   insertionSort([
//     ...new Array(100000).keys().filter((n) => n % 2 !== 0),
//     ...new Array(100000).keys().filter((n) => n % 2 === 0),
//   ])
// );

// 100 -> 1
// 100000 -> 9909
// 200000 -> 48212
