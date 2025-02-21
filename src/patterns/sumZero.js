console.clear();

function sumZeroOne(arr) {
  let obj = {};

  for (let i of arr) {
    if (i) {
      obj[i] = 1;
    }
  }

  for (let i of arr) {
    if (obj[-1 * i]) {
      const pair = [i, -1 * i];
      console.log(pair);
      return pair;
    }
  }

  console.log(undefined);
  return undefined;
}

function sumZeroTwo(arr) {
  const arrLen = arr.length;

  if (arrLen === 0) {
    return undefined;
  }

  let zeroIndex = arr.findIndex((el) => el === 0);

  for (let i = 0; i < zeroIndex; i++) {
    const iEle = arr[i];

    for (let j = zeroIndex + 1; j < arrLen; j++) {
      console.log("loop");

      const currentEle = arr[j];

      if (iEle + currentEle === 0) {
        console.log([iEle, currentEle]);
        return [iEle, currentEle];
      }
    }
  }

  console.log(undefined);
  return undefined;
}

function sumZero(arr) {
  let initialIndex = 0;
  let finalIndex = arr.length - 1;

  while (initialIndex < finalIndex) {
    const initialNum = arr[initialIndex];
    const finalNum = arr[finalIndex];

    const sum = initialNum + finalNum;

    if (sum === 0) {
      console.log([initialNum, finalNum]);
      return [initialNum, finalNum];
    }

    if (sum > 0) {
      finalIndex--;
    } else {
      initialIndex++;
    }
  }

  console.log(undefined);
  return undefined;
}

// Sorted array of integers
sumZero([-3, -2, -1, 0, 1]); // [-1,1]
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
