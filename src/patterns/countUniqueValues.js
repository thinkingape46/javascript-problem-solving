console.clear();

function countUniqueValues(arr) {
  const obj = {};

  for (let i of arr) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }

  const uniqueValues = Object.keys(obj).length;

  console.log(uniqueValues);

  return uniqueValues;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
