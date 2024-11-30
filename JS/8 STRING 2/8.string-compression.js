var compress = function (chars) {
  let counterMap = new Map();

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    counterMap.set(currentChar, (counterMap.get(currentChar) || 0) + 1);
  }

  chars = [];

  for (const [key, value] of counterMap) {
    chars.push(key);
    if (value > 1 && value < 10) {
      chars.push(value);
    }
    if (value > 10) {
      const seperatedDigit = value.toString().split("");
      chars = chars.concat(seperatedDigit);
    }
  }
  return chars;
};

console.log("test1::", compress(["a", "a", "b", "b", "c", "c", "c"])); // ["a","2","b","2","c","3"]
console.log("test2::", compress(["a"])); // ["a"]
console.log(
  "test3::",
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // ["a","b","1","2"].
