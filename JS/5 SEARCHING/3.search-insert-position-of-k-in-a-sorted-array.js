/**
 * Given a sorted array arr[] consisting of N distinct integers and an integer K, the task is to find the index of K, if it’s present in the array arr[]. Otherwise, find the index where K must be inserted to keep the array sorted.

Examples: 


Input: arr[] = {1, 3, 5, 6}, K = 5
Output: 2
Explanation: Since 5 is found at index 2 as arr[2] = 5, the output is 2.


Input: arr[] = {1, 3, 5, 6}, K = 2
Output: 1
Explanation: Since 2 is not present in the array but can be inserted at index 1 to make the array sorted.


 */

function find_index(arr, n, K) {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    // check if k is mid
    if (arr[mid] === K) {
      return mid;

      // check if k is smaller than k
    } else if (arr[mid] > K) {
      end = mid - 1;

      // check if k is greater than k
    } else if (arr[mid] < K) {
      start = mid + 1;
    }
  }
  // return the end index
  return end + 1;
}
console.log("test1::", find_index([1, 3, 5, 6], 4, 5)); // output 2
console.log(
  "test2::",
  find_index([1, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17], 14, 10)
); // Output: 1
