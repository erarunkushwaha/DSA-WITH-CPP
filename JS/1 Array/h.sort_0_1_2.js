const swap = (arr, i, j) => {
  const tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
};

const duchSort = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low, mid);
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      swap(arr, mid, high);
      high--;
    }
  }
  return arr;
};

console.log("ans::", duchSort([1, 2, 0, 0, 1, 2, 2, 1, 0, 0]));
