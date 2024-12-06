const getFactrioal = (n) => {
  if (n == 0) {
    return 1;
  }
  const fac = n * getFactrioal(n - 1);
  return fac;
};
console.log("1::", getFactrioal(1));
console.log("3::", getFactrioal(3));
console.log("5::", getFactrioal(5));
