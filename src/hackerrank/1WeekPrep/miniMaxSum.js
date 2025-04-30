function miniMaxSum(arr) {
  // Write your code here
  const arrLen = arr?.length;

  const sortedArray = arr.sort((a, b) => a - b);

  function arrSum(inputArray) {
    return inputArray.reduce((a, b) => a + b);
  }

  const min = arrSum(sortedArray.slice(0, 4));
  const max = arrSum(sortedArray.slice(1, 5));

  console.log(`${min} ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
