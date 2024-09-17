const findUnique = (input) => {
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    ans = ans ^ input[i];
    console.log("i::", ans);
  }
  return ans;
};

console.log("ans::", findUnique([2, 2, 3, 3, 4, 4, 5, 5, 6]));
