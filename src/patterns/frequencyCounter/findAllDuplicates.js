/*
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. 
Find all the elements that appear twice in this array. Note that you can return the elements in any order.

Time Complexity - O(n)

*/

function findAllDuplicates(arr) {
  let ops = 0;

  const integerObject = {};

  const duplicates = [];

  for (item of arr) {
    const string = String(item);

    if (integerObject[string]) {
      ops++;

      duplicates.push(item);
    } else {
      ops++;
      integerObject[string] = 1;
    }
  }

  console.log(duplicates, `length: ${arr.length}`, `ops: ${ops}`);

  return duplicates;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]); // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1
