const getMaxOccuringChar = (str) => {
  const tempCounter = new Map();
  let maxChar = "";
  let maxCount = 0;

  // Count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (tempCounter.has(currentChar)) {
      tempCounter.set(currentChar, tempCounter.get(currentChar) + 1);
    } else {
      tempCounter.set(currentChar, 1);
    }

    // Update maxCount and maxChar (for keeping track of first occurrence only)
    if (tempCounter.get(currentChar) > maxCount) {
      maxCount = tempCounter.get(currentChar);
      maxChar = currentChar;
    }
  }

  // Find the lexicographically smallest character with maxCount
  let smallestCharWithMaxCounter = maxChar;
  for (const [keys, value] of tempCounter) {
    if (value === maxCount) {
      if (smallestCharWithMaxCounter > keys) {
        smallestCharWithMaxCounter = keys;
      }
    }
  }

  return smallestCharWithMaxCounter;
};

console.log("test1::", getMaxOccuringChar("testsample"));
console.log("test2::", getMaxOccuringChar("output"));
