var peakIndexInMountainArray = function (arr) {
  let start = 0; // Start from the first index
  let end = arr.length - 1; // End at the last index

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Check if mid is on the rising slope
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1; // Peak must be to the right
    } else {
      end = mid; // Peak must be at mid or to the left
    }
  }

  // When start and end converge, they point to the peak index
  return start;
};

// Testing the function
console.log("test1::", peakIndexInMountainArray([0, 1, 0])); // Output: 1
console.log("test2::", peakIndexInMountainArray([0, 2, 1, 0])); // Output: 1
console.log("test3::", peakIndexInMountainArray([0, 10, 5, 2])); // Output: 1

console.log("test4::", peakIndexInMountainArray([0, 4, 8, 20, 10, 5, 2]));
