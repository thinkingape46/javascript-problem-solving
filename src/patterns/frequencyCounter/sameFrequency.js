/*

 Frequency Counter - sameFrequency
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

 Your solution MUST have the following complexities:
 
 Time: O(N)

*/

function sameFrequency(a, b) {
  let ops = 0;

  const aString = `${a}`;
  const bString = `${b}`;

  const aLen = aString.length;
  const bLen = bString.length;

  if (aLen !== bLen) {
    console.log(false);
    return false;
  }

  const aObj = {};

  const bObj = {};

  for (let item of aString) {
    if (aObj[item]) {
      aObj[item]++;
      ops++;
    } else {
      aObj[item] = 1;
      ops++;
    }
  }

  for (let item of bString) {
    if (bObj[item]) {
      bObj[item]++;
      ops++;
    } else {
      bObj[item] = 1;
      ops++;
    }
  }

  for (item in aObj) {
    if (aObj[item] !== bObj[item]) {
      ops++;
      console.log(false);
      return false;
    }
  }

  console.log(true, `a len: ${aLen}, b len: ${bLen}`, `ops: ${ops}`);
  return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
