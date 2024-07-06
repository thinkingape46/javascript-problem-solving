const reverseString = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const s1Len = s1.length;
  let s1Reverse = "";

  for (let i = 0; i < s1Len; i++) {
    const char = s1[i];

    s1Reverse = `${char}${s1Reverse}`;
  }

  return s1Reverse === s2;
};

const output = reverseString("anagram", "margana");

module.exports = output;
