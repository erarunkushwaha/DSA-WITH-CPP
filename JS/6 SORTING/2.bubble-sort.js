/**
 * Given an unsorted array of size N, use bubble sort to sort arr[] in increasing order.
 */

const bubbleSort = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr;
  }

  let swap_counter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    // Corrected: Outer loop should start from 0
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Corrected: Stop at arr.length - 1 - i
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap_counter++;
      }
    }
  }

  console.log("swap_counter::", swap_counter);

  return arr;
};

// Test cases
console.log("test1::", bubbleSort([4, 1, 3, 3, 3, 9, 8, 8, 1, 7])); // Test case 1
console.log("test2::", bubbleSort([1])); // Test case 2
console.log("test3::", bubbleSort([4, 1, 3, 9, 2, 7, 8, 12, 45])); // Test case 3
console.log("test4::", bubbleSort([1, 2, 3, 4, 5])); // Test case 4

// For string comparison
console.log("test5::", bubbleSort(["banana", "apple", "grape", "cherry"])); // Test case with strings
