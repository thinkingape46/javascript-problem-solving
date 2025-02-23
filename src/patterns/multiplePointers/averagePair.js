/*

Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

*/

function averagePair(arr, num) {
  let ops = 0;
  const lenArr = arr.length;

  if (lenArr === 0) {
    console.log(false, `array len: ${lenArr}`, `ops: ${ops}`);
    return false;
  }

  let leftIndex = 0;
  let rightIndex = lenArr - 1;

  while (leftIndex < rightIndex) {
    const eleLeft = arr[leftIndex];
    const eleRight = arr[rightIndex];

    const average = (eleLeft + eleRight) * 0.5;
    ops++;
    if (average === num) {
      console.log(true, `array len: ${lenArr}`, `ops: ${ops}`);
      return true;
    } else if (average < num) {
      leftIndex++;
    } else if (average > num) {
      rightIndex--;
    }
  }

  console.log(false, `array len: ${lenArr}`, `ops: ${ops}`);
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
