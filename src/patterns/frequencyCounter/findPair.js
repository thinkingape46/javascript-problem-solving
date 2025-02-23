/*

Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

Part 1 - solve this with the following requirements:

Time Complexity Requirement - O(n)

Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:

Time Complexity Requirement - O(n log n)

Space Complexity Requirement - O(1)

*/

function findPair(arr, result) {
  let ops = 0;

  if (arr.length === 0) {
    console.log(false, ops);
    return false;
  }

  const uniqNumObj = {};

  const lenArr = arr.length;

  for (let i = 0; i < lenArr; i++) {
    const eleOne = arr[i];

    if (!uniqNumObj[eleOne]) {
      for (let j = i + 1; j < lenArr; j++) {
        const eleTwo = arr[j];

        uniqNumObj[eleOne] = 1;

        ops++;

        const difference = eleOne - eleTwo;

        if (difference === result || -1 * difference === result) {
          console.log(true, lenArr, " ops:", ops);
          return true;
        }
      }
    }
  }

  console.log(false, lenArr, " ops:", ops);
  return false;
}

findPair([6, 1, 4, 10, 2, 4], 2); // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true
findPair([4, -2, 3, 10], -6); // true
findPair([6, 1, 4, 10, 2, 4], 22); // false
findPair([], 0); // false
findPair([5, 5], 0); // true
findPair([-4, 4], -8); // true
findPair([-4, 4], 8); // true
findPair([1, 3, 4, 6], -2); // true
findPair([0, 1, 3, 4, 6], -2); // true
