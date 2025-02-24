/*

Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Time Complexity - O(n)

Space Complexity - O(1)

*/

function minSubArrayLen(arr, number) {
  let ops = 0;

  let subarrayLen = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    let subarraySum = arr[i];
    let rightIndex = i + 1;
    let len = 1;

    while (
      subarraySum < number &&
      rightIndex < arr.length &&
      rightIndex - i < subarrayLen
    ) {
      if (arr[rightIndex]) {
        subarraySum += arr[rightIndex];
        len++;
        rightIndex++;
        ops++;
      }
    }

    if (len < subarrayLen && subarraySum >= number) {
      subarrayLen = len;
    }
  }

  const output = subarrayLen === Infinity ? 0 : subarrayLen;

  console.log(output, `${arr.length} -> ${ops}`);
  return output;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
