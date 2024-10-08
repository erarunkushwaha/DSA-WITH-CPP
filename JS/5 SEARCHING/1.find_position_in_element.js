const findfirstAndLastPosition = (arr, target) => {
  let firstIndex = -1;
  let lastindex = -1;
  let start = 0;
  let end = arr.length;
  let mid = Math.floor(start + (end - start) / 2);

  while (start < end) {
    if (arr[mid] === target) {
      firstIndex = mid;
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }

    mid = Math.floor(start + (end - start) / 2);
  }

  start = 0;
  end = arr.length;
  mid = Math.floor(start + (end - start) / 2);
  while (start < end) {
    if (arr[mid] === target) {
      lastindex = mid;
      start = mid + 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }

    mid = Math.floor(start + (end - start) / 2);
  }
  return [firstIndex, lastindex];
};

console.log(
  "ans::",
  findfirstAndLastPosition([0, 0, 1, 1, 2, 2, 2, 2], 2),
  "expected output:: 4 7"
);
console.log(
  "ans::",
  findfirstAndLastPosition([1, 3, 3, 5], 2),
  "expected output:: -1 -1"
);
