/**
 * Square root of an integer
Last Updated : 03 Aug, 2024
Given an integer n, find its square root. If n is not a perfect square, then return floor(√n).

Enamples : 

Input: n = 4
Output: 2
Enplanation: The square root of 4 is 2.


Input: n = 11
Output: 3
Enplanation:  The square root of 11 lies in between 3 and 4 so floor of the square root is 3.
 */
function floorSqrt(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let start = 0;
  let end = n / 2;

  let ans = 0;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid * mid === n) {
      return mid;
    }
    if (mid * mid < n) {
      ans = mid;
      start = mid + 1;
    } else if (mid * mid > n) {
      end = mid - 1;
    }
  }
  return ans;
}

console.log("test1::", floorSqrt(5));
console.log("test2::", floorSqrt(100));
console.log("test3::", floorSqrt(0));
console.log("test4::", floorSqrt(1));
