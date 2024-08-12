/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.  */

const nums = [2, 7, 12, 15, 9, 4, 8];
const target = 13;

// by brute force

// for (let i = 0; i < nums.length; i++) {
//   const element = nums[i];
//   for (let j = i + 1; j < nums.length; j++) {
//     const element2 = nums[j];
//     if (element + element2 === target) {
//       return [i, j];
//     }
//   }
// }

// by hash map

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const ans = target - nums[i];
    if (map.has(ans) && map.get(ans) !== i) {
      return [i, map.get(ans)];
    }
  }
};

console.log("ans::", twoSum(nums, target));
