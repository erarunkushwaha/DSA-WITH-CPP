/**
 * 
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
 */

// brute force
// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// var maxArea = function (height) {
//   let maximumarea = 0;

//   for (let index = 0; index < height.length; index++) {
//     for (let index2 = index + 1; index2 < height.length; index2++) {
//       const length = Math.min(height[index], height[index2]);
//       const width = index2 - index;
//       const area = length * width;
//       maximumarea = Math.max(area, maximumarea);
//     }
//   }
//   return maximumarea;
// };

// console.log("maxAreaans::", maxArea(height));

// by tow pointer apporach
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let p1 = 0;
  let p2 = height.length - 1;
  let maximumArea = 0;

  while (p1 < p2) {
    const currentArea = Math.min(height[p1], height[p2]) * (p2 - p1);
    maximumArea = Math.max(maximumArea, currentArea);

    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maximumArea;
};

// console.log("ans::", maximunarea);
// maxArea(height);
console.log("maxArea::", maxArea(height));
