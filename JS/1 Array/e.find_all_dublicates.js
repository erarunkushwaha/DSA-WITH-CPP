/****
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []
 */
const findDuplicates = (nums) => {
  if (nums.length < 2) {
    return [];
  }
  const counterMap = new Map();
  for (let num of nums) {
    counterMap.set(num, (counterMap.get(num) || 0) + 1);
  }

  const result = [];
  for (let key of counterMap.keys()) {
    if (counterMap.get(key) > 1) {
      result.push(key);
    }
  }
  return result;
};

console.log("test1::", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log("test2::", findDuplicates([1, 1, 2]));
console.log("test3::", findDuplicates([1]));
