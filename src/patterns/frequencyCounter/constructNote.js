/*

Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. 
The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

*/

function constructNote(message, letters) {
  let ops = 0;

  const lenMessage = message?.length;
  const lenLetters = letters?.length;

  if (lenLetters < lenMessage) {
    console.log(false);
    return false;
  }

  const objLetters = {};

  for (character of letters) {
    ops++;
    if (objLetters[character]) {
      objLetters[character]++;
    } else {
      objLetters[character] = 1;
    }
  }

  for (character of message) {
    ops++;
    if (objLetters[character]) {
      objLetters[character]--;
    } else {
      console.log(false, `max ops: ${lenLetters + lenMessage}`, "ops:", ops);
      return false;
    }
  }

  console.log(true, `max ops: ${lenLetters + lenMessage}`, "ops:", ops);
  return true;
}

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true
constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true
constructNote("hello", "helloo"); // true
constructNote("hello", "helo"); // false
constructNote("a", "a"); // true
constructNote("a", "b"); // false
constructNote("", "abc"); // true
constructNote("abc", ""); // false
constructNote("aaa", "aaaa"); // true
constructNote("aaab", "aab"); // false
constructNote("xyz", "yxz"); // true
constructNote("test", "ttewst"); // true
constructNote("test", "tst"); // false
constructNote("abcd", "abc"); // false
