function mergeTwoSortedArrays(a, b) {
  let count = 0;
  let start = new Date().getTime();

  let i = 0;
  let j = 0;
  const arrLen = a?.length + b?.length;
  let output = [];

  if (a[a?.length - 1] < b[0]) {
    count++;
    output = [...a, ...b];
  } else if (b[b?.length - 1] < a[0]) {
    count++;
    output = [...b, ...a];
  } else {
    while (i < a?.length && j < b?.length) {
      const iEle = a[i];
      const jEle = b[j];

      if (iEle < jEle) {
        output.push(iEle);
        i++;
      } else if (iEle > jEle) {
        output.push(jEle);
        j++;
      } else if (iEle === jEle) {
        output.push(iEle, jEle);
        i++;
        j++;
      }
      count++;
    }

    while (i < a.length) {
      output.push(a[i++]);
    }
    while (j < b.length) {
      output.push(b[j++]);
    }
  }

  const now = new Date().getTime() - start;
  const nlogn = Math.ceil(arrLen * Math.log10(arrLen));

  console.table({
    time: now,
    nlogFrac: Math.floor((count / nlogn) * 100),
    arrLen,
    count,
    nlogn,
  });

  return output;
}

// console.log(
//   mergeTwoSortedArrays(
//     [...new Array(10).keys()].filter((n) => n % 2 !== 0),
//     [...new Array(10).keys()].filter((n) => n % 2 === 0)
//   )
// );
// console.log(mergeTwoSortedArrays([1, 3, 4, 7, 9], [2, 4, 5, 9, 100]));
// console.log(mergeTwoSortedArrays([7, 8], [1, 3, 6]));
