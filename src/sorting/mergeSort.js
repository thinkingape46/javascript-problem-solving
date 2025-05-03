function mergeSort(arr) {
  const arrLen = arr?.length;

  if (!arrLen) {
    return arr;
  }

  let start = performance.now();
  let count = 0;

  const splitArray = [];

  (function () {
    for (let i = 0; i < arrLen; i++) {
      splitArray.push([arr[i]]);
    }
  })(arr);

  function mergeTwoArrays(a, b) {
    let i = 0;
    let j = 0;
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
    return output;
  }

  const output = (function merge(sArr) {
    const len = sArr?.length;
    if (len <= 1) {
      return sArr;
    }

    let tmp = [];

    for (let i = 0; i < len; i += 2) {
      tmp.push(mergeTwoArrays(sArr[i] || [], sArr[i + 1] || []));
    }
    return merge(tmp);
  })(splitArray);

  console.table({
    length: arrLen,
    count: count,
    "n^2": arrLen ** 2,
    nLogn: Math.ceil(arrLen * Math.log10(arrLen)),
    time: performance.now() - start,
  });

  return output?.[0];
}

// console.log(mergeSort([]));
console.log(mergeSort([...new Array(1000000)].map(Function.call, Math.random)));

// Results
// 100 -> 1
// 100000 -> 129
// 200000 -> 278
// 300000 -> 410
// 400000 -> 520
// 1000000 -> 1306
