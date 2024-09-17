// const pairSum = (arr: number[], target: number): number[] => {
//   const result: number[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]]; // Return immediately when a pair is found
//       }
//     }
//   }

//   return result; // If no pair is found, return an empty array
// };

// const ans = pairSum([1, 3, 2, 5, 11, 8, 9], 7);
// console.log("pairSum::", ans);

// optimised solutions

const pairSum = (arr: number[], target: number): number[] => {
  const numMaps: { [key: number]: boolean } = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (numMaps.hasOwnProperty(complement)) {
      return [complement, arr[i]];
    }
    numMaps[arr[i]] = true;
  }
  return [];

  // If no pair is found, return an empty array
};

const ans = pairSum([1, 3, 2, 5, 11, 8, 9], 7);
console.log("pairSum::", ans);
