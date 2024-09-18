/****
 * brute force----
 * const triplateSum = (arr: number[], target: number): number[] => {
  let result: number[] = [];

  const numMap1 = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const complement = target - arr[i] -arr[j];
      if(numMap1[complement]){
        return result = [arr[i], complement, arr[j]];
      }
      numMap1[arr[j]] = true;
    }
  }
  return result;
};
console.log('ans1,', triplateSum([2, 5, 4, 3, 7, 1, 9, 12, 8], 11));
console.log('ans2,', triplateSum([2, 5, 4, 3, 7, 1, 9, 12, 8], 13));

 */

//  optimised
const triplateSum = (arr: number[], target: number): number[] => {
  let result: number[] = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === target) {
        return (result = [arr[i], arr[left], arr[right]]);
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
console.log("ans1,", triplateSum([2, 5, 4, 3, 7, 1, 9, 12, 8], 11));
console.log("ans2,", triplateSum([2, 5, 4, 3, 7, 1, 9, 12, 8], 13));
