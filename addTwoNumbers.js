const lengthOfLongestSubstring = function (s) {
  let theLongest = {
    temp: "",
    position: 0,
    value: "",
  };
  let { temp, position, value, leng } = theLongest;

  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i])) {
      position = i - temp.length;
      temp = "";
      i = position + 1;
    }
    temp += s[i];
    if (value.length < temp.length) {
      value = temp;
    }
  }
  return value.length;
};

s = "abcdefghabcdefghij";
console.log(lengthOfLongestSubstring(s));
