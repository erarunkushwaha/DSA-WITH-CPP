const moveZeroToEnd = (arr) => {
  let indexForNonZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let tem = arr[i];
      arr[i] = arr[indexForNonZero];
      arr[indexForNonZero] = tem;
      indexForNonZero++;
    }
  }
  return arr;
};

console.log("test::", moveZeroToEnd([1, 0, 0, 3, 2, 0, 0, 0]));
