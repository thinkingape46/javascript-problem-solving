/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(stringOne, stringTwo) {
  let ops = 0;

  let charsRemaining = stringOne.length;

  const lenOne = stringOne.length;
  const lenTwo = stringTwo.length;

  let leftIndex = 0;
  let rightIndex = lenTwo - 1;

  for (i of stringOne) {
    while (leftIndex < lenTwo) {
      const ele = stringTwo[leftIndex];
      //   console.log(i, ele, leftIndex, rightIndex);
      if (i === ele) {
        charsRemaining--;
        leftIndex++;
        ops++;
        break;
      } else {
        leftIndex++;
        ops++;
      }
    }
  }

  if (charsRemaining <= 0) {
    console.log(true, `array len: ${lenOne + lenTwo}`, `ops: ${ops}`);
    return true;
  }
  console.log(false, `array len: ${lenOne + lenTwo}`, `ops: ${ops}`);
  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters) {}
isSubsequence("abc", "aracadabrac"); // true
