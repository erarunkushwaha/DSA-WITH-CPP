/***
 * Given an unsorted array of size N, use selection sort to sort arr[] in increasing order.
 */

const selectionSort = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr;
  }

  let swap_counter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
    swap_counter++;
  }
  console.log("swap_counter::", swap_counter);

  return arr;
};

console.log("test1::", selectionSort([4, 1, 3, 3, 3, 9, 8, 8, 1, 7]));
console.log("test2::", selectionSort([1]));
console.log("test3::", selectionSort([4, 1, 3, 9, 2, 7, 8, 12, 45]));
console.log("test4::", selectionSort(["banana", "apple", "grape", "cherry"]));
console.log("test4::", selectionSort([1, 2, 3, 5, 4]));
