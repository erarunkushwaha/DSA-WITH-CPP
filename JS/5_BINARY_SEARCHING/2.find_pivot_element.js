/*
 * array is sorted and rotated
input: [8,10,17,1,3,5]
output: 1
 */
const findPivotElement = (arr) => {
  const length = arr.length - 1;

  // if array is empty
  if (arr.length === 0) {
    return -1;
  }

  // if array is sorted and not roated
  if (arr[0] < arr[length]) {
    return arr[0];
  }

  // initilizing some commmon factor
  let start = 0;
  let end = arr.length - 1;

  // calculation mid

  // declaring the loop condation

  //   && arr[mid] < arr[mid + 1]
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return arr[mid];
      //
    } else if (arr[mid] > arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

console.log("pivot1::", findPivotElement([8, 10, 17, 1, 3, 5]));
console.log("pivot2::", findPivotElement([1, 3, 5, 8, 10, 17]));
console.log("pivot3::", findPivotElement([]));
