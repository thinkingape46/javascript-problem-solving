function lonelyinteger(a) {
  // Write your code here

  const obj = {};

  for (let i = 0; i < a?.length; i++) {
    const ele = a[i];

    if (!(ele in obj)) {
      obj[ele] = 1;
    } else {
      obj[ele]++;
    }
  }

  const uniqueKeys = Object.keys(obj);

  for (let j = 0; j < uniqueKeys.length; j++) {
    const ele = obj[uniqueKeys[j]];
    if (ele === 1) {
      return uniqueKeys[j];
    }
  }
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
