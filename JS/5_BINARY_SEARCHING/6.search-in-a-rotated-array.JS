/***
 * Given a sorted (in ascending order) and rotated array arr of distinct elements which may be rotated at some point and given an element key, the task is to find the index of the given element key in the array arr. The whole array arr is given as the range to search.

Rotation shifts elements of the array by a certain number of positions, with elements that fall off one end reappearing at the other end.

Note:- 0-based indexing is followed & returns -1 if the key is not present.

Examples :

Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 10
Output: 5
Explanation: 10 is found at index 5.
Input: arr[] = [3, 5, 1, 2], key = 6
Output: -1
Explanation: There is no element that has value 6.
Input: arr[] = [33, 42, 72, 99], key = 42
Output: 1
Explanation: 42 is found at index 1.
 */

function search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (start - end) / 2);
    //
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    }
  }
  return -1;
}

// console.log("test1::", search([5, 6, 7, 8, 9, 10, 1, 2, 3], 10)); // output -- 5
console.log("test2::", search([3, 5, 1, 2], 10)); // output --   -1
console.log("test3::", search([33, 42, 72, 99], 42)); // output -- 1
