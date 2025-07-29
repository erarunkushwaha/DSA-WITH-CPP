const maximumSum = (arr: number[], k: number): number => {
  let maxSum = 0;
  let currentSum = 0;
  // get fist sliding window
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  // the remaing sliding window

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - k];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

const input1 = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1];

console.log('ans1', maximumSum(input1, 4));
export {}