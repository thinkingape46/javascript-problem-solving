// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here -
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and
// // here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, num) {
  let ops = 0;
  const lenArray = arr.length;

  if (num < arr[0]) {
    console.log(`length: ${lenArray},ops: ${ops}`, -1);
    return -1;
  }

  if (num > arr[lenArray - 1]) {
    console.log(`length: ${lenArray},ops: ${ops}`, -1);
    return -1;
  }

  let leftIndex = 0;
  let rightIndex = lenArray - 1;

  while (Math.abs(rightIndex - leftIndex) > 1) {
    ops++;
    if (arr[leftIndex] === num) {
      console.log(`length: ${lenArray},ops: ${ops}, solution:`, leftIndex);
      return leftIndex;
    }
    if (arr[rightIndex] === num) {
      console.log(`length: ${lenArray},ops: ${ops}, solution:`, rightIndex);
      return rightIndex;
    }

    const centerIndex = Math.floor((leftIndex + rightIndex) * 0.5);

    const centerItem = arr[centerIndex];

    if (arr[centerIndex] === num) {
      console.log(`length: ${lenArray},ops: ${ops}, solution:`, centerIndex);
      return centerIndex;
    } else if (centerItem > num) {
      rightIndex = centerIndex;
    } else if (centerIndex < num) {
      leftIndex = centerIndex;
    }
  }

  console.log(`length: ${lenArray},ops: ${ops}, solution:`, -1);
  return -1;
}

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1
binarySearch([2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60, 63], 13); // -1
