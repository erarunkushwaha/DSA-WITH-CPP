/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reversedNumber = "";
  let arr = String(x);
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedNumber += arr[i];
  }
  if (reversedNumber === arr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(21));
