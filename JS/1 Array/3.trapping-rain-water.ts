let trap = function (height) {
  let totalWater = 0;

  let leftP = 0;
  let rightP = height.length - 1;

  let maxLeft = height[leftP];
  let maxRight = height[rightP];

  while (leftP < rightP) {
    if (height[leftP] <= height[rightP]) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      let currentWater = maxLeft - height[leftP];
      totalWater += currentWater;
      leftP++;
    } else {
      maxRight = Math.max(maxRight, height[rightP]);
      let currentWater = maxRight - height[rightP];
      totalWater += currentWater;
      rightP--;
    }
  }

  return totalWater;
};

const heightInput = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const ans = trap(heightInput);

console.log("ans", ans);
