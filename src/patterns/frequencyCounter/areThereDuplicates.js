/*

Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

*/

function areThereDuplicates(...arr) {
  let ops = 0;

  if (!arr.length) {
    return false;
  }

  const objInput = {};

  for (let item of arr) {
    if (objInput[item]) {
      ops++;
      console.log(true, `length: ${arr.length}`, `ops: ${ops}`);
      return true;
    } else {
      ops++;
      objInput[item] = true;
    }
  }

  console.log(false, `length: ${arr.length}`, `ops: ${ops}`);
  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
