const getTotalOfPower = (n) => {
  if (n == 0) {
    return 1;
  }
  return 2 * getTotalOfPower(n - 1);
};
console.log("1::", getTotalOfPower(1));
console.log("3::", getTotalOfPower(3));
console.log("5::", getTotalOfPower(5));
