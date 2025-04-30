function diagonalDifference(arr) {
  // Write your code here

  let ltrSum = 0;
  let rtlSum = 0;
  const order = arr?.length;

  for (let i = 0; i < arr?.length; i++) {
    const row = arr[i];

    ltrSum += row[i];
    rtlSum += row[order - (i + 1)];
  }

  return Math.abs(ltrSum - rtlSum);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
