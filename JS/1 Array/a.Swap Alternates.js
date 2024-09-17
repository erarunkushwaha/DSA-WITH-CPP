// swap adjacent element in array
//  input = [2,5,6,3,7,8,4,9,5] output---> [5,2,3,6,8,7,9,4,5]

const swap = (input, i) => {
  let temp = input[i];
  input[i] = input[i + 1];
  input[i + 1] = temp;
};

const swapAdjacentElement = (input) => {
  let i = 0;
  while (i < input.length - 1) {
    swap(input, i);
    i = i + 2;
  }
  return input;
};

const input = [2, 5, 6, 3, 7, 8, 4, 9, 5];

console.log("ans::", swapAdjacentElement(input));
