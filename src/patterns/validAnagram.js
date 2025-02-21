console.clear();

const validAnagram = (input, output) => {
  if (input.length !== output.length) {
    console.log(false);
    return false;
  }

  const inputObj = {};

  for (let i of input) {
    if (inputObj[i]) {
      inputObj[i]++;
    } else {
      inputObj[i] = 1;
    }
  }

  // console.log(inputObj);

  for (let k of output) {
    if (inputObj[k]) {
      inputObj[k]--;
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
