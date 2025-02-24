/*

Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

Time Complexity - O(n)

*/

function findLongestSubstring(string) {
  const lenString = string.length;
  let ops = 0;

  if (lenString === 0) {
    console.log(0);
    return 0;
  }

  let leftIndex = 0;
  let rightIndex = 1;
  let output = 0;

  let obj = {};

  obj[string[0]] = 1;

  while (rightIndex < lenString) {
    const rightEle = string[rightIndex];

    if (obj[rightEle]) {
      const subString = string.slice(leftIndex, rightIndex).split("");
      const subStringIndex = subString.findIndex((item) => item === rightEle);

      subString.slice(subStringIndex).forEach((el) => {
        obj[el] = 1;
      });
      obj[rightEle] = 1;

      if (rightIndex - leftIndex > output) {
        output = rightIndex - leftIndex;
      }

      leftIndex = subStringIndex + leftIndex + 1;
      rightIndex++;

      if (rightIndex - leftIndex > output) {
        output = rightIndex - leftIndex;
      }
    } else {
      obj[rightEle] = 1;
      rightIndex++;
    }
  }

  if (rightIndex - leftIndex > output) {
    output = rightIndex - leftIndex;
  }

  console.log(output, `${string.length} -> ${ops}`, leftIndex, rightIndex);
  return output;
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
