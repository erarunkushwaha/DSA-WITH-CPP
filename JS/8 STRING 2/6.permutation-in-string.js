var checkInclusion = function (s1, s2) {
  const counterOne = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (counterOne.has(s1[i])) {
      const currentChar = counterOne.get(s1[i]);
      counterOne.set(s1[i], currentChar + 1);
    } else {
      counterOne.set(s1[i], 1);
    }
  }

  const windowCounter = new Map();

  let index = 0;
  let leftIndex = 0;
  let windowSize = s1.length;

  //running for first window
  while (index < windowSize) {
    const currentChar = s2[index];
    if (windowCounter.has(currentChar)) {
      windowCounter.set(currentChar, windowCounter.get(currentChar) + 1);
    } else {
      windowCounter.set(currentChar, 1);
    }
    index++;
  }
  if (compareMap(counterOne, windowCounter)) return true;

  // code for remaing window
  while (index < s2.length) {
    const charToAdd = s2[index];
    const charToRemove = s2[leftIndex];
    windowCounter.set(charToAdd, (windowCounter.get(charToAdd) || 0) + 1);

    if (windowCounter.get(charToRemove) === 1) {
      windowCounter.delete(charToRemove);
    } else {
      windowCounter.set(charToAdd, windowCounter.get(charToAdd) - 1);
    }
    leftIndex++;
    index++;

    if (compareMap(counterOne, windowCounter)) return true;
  }
  return false;
};

const compareMap = (s1, s2) => {
  if (s1.size !== s2.size) return false;

  for (const [key, value] of s1) {
    const currentValue = s2.get(key);
    if (currentValue !== value) return false;
  }
  return true;
};

console.log("test1::", checkInclusion("ab", "eidbaooo")); // true
console.log("test2::", checkInclusion("ab", "eidboaoo")); // false
