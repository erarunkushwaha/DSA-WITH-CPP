const printNumber = (n) => {
  if (n == 0) {
    return 1;
  }
  console.log(n);

  return printNumber(n - 1);
};

printNumber(5);
