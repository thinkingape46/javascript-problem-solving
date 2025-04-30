function plusMinus(arr) {
  // Write your code here

  const arrLen = arr?.length;

  let positives = 0;
  let negatives = 0;
  let zeroes = 0;

  if (arrLen === 0) {
    console.log(positives);
    console.log(negatives);
    console.log(zeroes);
  }

  for (let i = 0; i < arrLen; i++) {
    const element = arr[i];
    element > 0 ? positives++ : element < 0 ? negatives++ : zeroes++;
  }

  console.log(positives / arrLen);
  console.log(negatives / arrLen);
  console.log(zeroes / arrLen);
}

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
