const insertion_sort = (arr) => {
  // We start with the second element (index 1) because a single-element array is already "sorted".
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to be inserted in the correct position.
    let current = arr[i];

    // Start comparing with the element just before the current one.
    let j = i - 1;

    // Shift elements in the sorted part of the array (left side) to the right until we find where `current` should go.
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--; // Move left in the sorted part to continue checking
    }

    // Place `current` in its correct position (one past where `j` stopped)
    arr[j + 1] = current;
  }

  return arr; // Return the sorted array
};

// Example usage:
console.log("insertion_sort::", insertion_sort([4, 12, 11, 20, 5, 7, 3]));
