/**
 * 
 * Given an array/list 'ARR' of integers and a position ‘M’. You have to reverse the array after that position.

Example:

We have an array ARR = {1, 2, 3, 4, 5, 6} and M = 3 , considering 0 
based indexing so the subarray {5, 6} will be reversed and our 
output array will be {1, 2, 3, 4, 6, 5}.
 */

const reverseArray = (arr, m) => {
  let start = m + 1;
  let end = arr.length - 1;

  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6], 3)); // Output: [1, 2, 3, 4, 6, 5]
console.log(reverseArray([10, 9, 8, 7, 6], 2)); // Output: [10, 9, 8, 7, 6]
console.log(reverseArray([10, 4, 5, 2, 3, 6, 1, 3, 6], 3)); // Output: [10 4 5 2 6 3 1 6 3 ]
