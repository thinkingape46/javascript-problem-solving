/*

128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
 
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 
Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

var longestConsecutive = function (nums) {
  if (nums?.length === 0) {
    return 0;
  }

  const arr = nums.sort((a, b) => a - b);

  let longestConsecutiveNumber = 1;
  let counter = 1;

  for (let i = 0; i < arr?.length; i++) {
    const prevEle = arr[i - 1];
    const currentEle = arr[i];
    if (currentEle === prevEle) {
      continue;
    } else if (currentEle - prevEle === 1) {
      counter++;
    } else if (counter > longestConsecutiveNumber) {
      longestConsecutiveNumber = counter;
      counter = 1;
    } else {
      counter = 1;
    }
  }

  return Math.max(counter, longestConsecutiveNumber);
};

console.log(longestConsecutive([1, 0, 1, 2]));
