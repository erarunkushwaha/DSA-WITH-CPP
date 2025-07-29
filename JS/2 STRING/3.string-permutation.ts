const isMapEqual = (counter1: any, counter2: any) => {
  if (counter1.size !== counter2.size) return false;

  for (const [key, value] of counter1) {
    if (counter2.get(key) !== value) return false;
  }
  return true;
};

const findPermuation = (str1: string, str2: string): boolean => {
  let counterOne = new Map();

  for (let i = 0; i < str2.length; i++) {
    if (counterOne.has(str2[i])) {
      counterOne.set(str2[i], counterOne.get(str2[i]) + 1);
    } else {
      counterOne.set(str2[i], 1);
    }
  }
  console.log("counterone", counterOne);

  // get first sliding widnow
  let countertwo = new Map();

  for (let i = 0; i < str2.length; i++) {
    if (countertwo.has(str1[i])) {
      countertwo.set(str1[i], countertwo.get(str1[i]) + 1);
    } else {
      countertwo.set(str1[i], 1);
    }
  }
  // check if first sliding window is answer
  if (isMapEqual(counterOne, countertwo)) {
    return true;
  }

  // remaing sliding window
  for (let i = str2.length; i < str1.length; i++) {
    // character to add. in counter
    const rightChar = str1[i];

    // char to remove in counter
    const leftChar = str1[i - str2.length];

    countertwo.delete(leftChar);

    countertwo.set(rightChar, (countertwo.get(rightChar) || 0) + 1);
    console.log("countertwo", countertwo);

    if (isMapEqual(counterOne, countertwo)) {
      return true;
    }
  }

  return false;
};

const input1 = "eidbaooo";

console.log("ans1", findPermuation(input1, "ab"));
