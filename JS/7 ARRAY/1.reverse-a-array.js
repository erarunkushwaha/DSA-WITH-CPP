const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Updated condition to stop once start >= end
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
