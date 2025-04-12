function nativeSearch(ls, ss) {
  if (ls === ss) {
    return 1;
  }

  const lsLen = ls.length;
  const ssLen = ss.length;

  if (lsLen < ssLen) {
    return 0;
  }

  let lIndex = 0;
  let count = 0;

  while (lIndex <= lsLen - ssLen) {
    if (ls.slice(lIndex, ssLen + lIndex) === ss) {
      count++;
    }
    lIndex++;
  }

  return count;
}

console.log(nativeSearch("wowomgzomg", "omg"));
