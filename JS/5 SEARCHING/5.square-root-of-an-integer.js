/**
 * Square root of an integer
Last Updated : 03 Aug, 2024
Given an integer X, find its square root. If X is not a perfect square, then return floor(√x).

Examples : 

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2.


Input: x = 11
Output: 3
Explanation:  The square root of 11 lies in between 3 and 4 so floor of the square root is 3.
 */
function floorSqrt(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let start = 0;
  let end = x / 2;

  let ans = 0;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid < x) {
      ans = mid;
      start = mid + 1;
    } else if (mid * mid > x) {
      end = mid - 1;
    }
  }
  return ans;
}

console.log("test1::", floorSqrt(25));
console.log("test2::", floorSqrt(100));
console.log("test3::", floorSqrt(0));
console.log("test4::", floorSqrt(1));
