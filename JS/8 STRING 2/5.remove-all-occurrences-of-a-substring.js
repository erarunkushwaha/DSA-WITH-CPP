var removeOccurrences = function (s, part) {
  while (s.length != 0 && s.includes(part)) {
    s = s.replace(part, "");
  }

  return s;
};

console.log("test1::", removeOccurrences("daabcbaabcbc", "abc")); // dab
console.log("test2::", removeOccurrences("axxxxyyyyb", "xy")); // ab
console.log("test2::", removeOccurrences("aabababa", "aba")); // ba
