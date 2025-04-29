var longestConsecutive = function (nums) {
  if (nums?.length === 0) {
    return 0;
  }

  const obj = {};

  nums.forEach((num) => {
    obj[num] = 1;
  });

  const arr = Object.keys(obj)
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  let longestConsecutiveNumber = 0;
  let counter = 0;

  for (let i = 0; i < arr?.length; i++) {
    console.log(counter, longestConsecutiveNumber, arr[i], arr[i - 1]);
    if (arr[i] - arr[i - 1] === 1) {
      counter++;
    } else if (counter >= longestConsecutiveNumber) {
      longestConsecutiveNumber = counter + 1;
      counter = 0;
    } else {
      counter = 0;
    }
  }
  console.log(arr);
  console.log(counter + 1, longestConsecutiveNumber);

  return Math.max(counter + 1, longestConsecutiveNumber);
};

longestConsecutive([-1, -9, -5, -2, -9, 8, -8, 1, -9, -3, -3]);
