// 53. Maximum Subarray

/***
 * 
 * 
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 * ** */


// time complexity o(n);
const getMaximumSubArray = (number: number[]): number => {
  const arr: number[] = number;
  let max: number = Number.MIN_SAFE_INTEGER;

  let currentSum = 0;

  for (let start = 0; start < arr.length; start++) {
    currentSum = currentSum + arr[start];
    max = Math.max(max, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return max;
};

const res = getMaximumSubArray([5, 4, -1, 7, 8]);

console.log("The maximum subarray is : ", res);