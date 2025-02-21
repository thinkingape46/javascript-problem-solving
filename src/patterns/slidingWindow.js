function maxSubarraySum(arr, num) {
  const arrLen = arr.length;

  if (arrLen < num) {
    console.log(null);
    return null;
  }

  let maxSum = -Infinity;
  let currentSum = 0;
  let ops = 0;

  for (let i = 0; i <= arrLen - num; i++) {
    if (i === 0) {
      for (let j = 0; j < num; j++) {
        currentSum += arr[j];
        ops++;
      }
    } else {
      const eleBehind = arr[i - 1];
      const eleAhead = arr[i + num - 1];
      currentSum += eleAhead - eleBehind;
      ops++;
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  console.log(maxSum, "arr length:", arr?.length, "ops:", ops);
  return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([4, 2, 1, 6], 4); // 13
maxSubarraySum([3, 3, 3, 3, 3], 3); // 9
maxSubarraySum([-1, -2, -3, -4, -5], 2); // -3
maxSubarraySum([1, -2, 3, 0, -1, 2, 1], 3); // 2
maxSubarraySum([10, 20, 30, 40, 50], 1); // 50
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 2, 3], 5); // null (subarray length > array length)
