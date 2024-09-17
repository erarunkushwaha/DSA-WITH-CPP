const findDublicate = (input) => {
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    ans = ans ^ input[i];
  }
  for (let index = 0; index < input.length; index++) {
    ans = ans ^ index;
  }

  return ans;
};

console.log("ans::", findDublicate([1, 2, 3, 4, 4, 5, 6]));
