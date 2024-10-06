function flattenArray(arr) {
  let result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      // If the element is an array, recursively flatten it
      result = result.concat(flattenArray(element));
    } else {
      // If it's not an array, just add it to the result
      result.push(element);
    }
  });

  return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flatArray = flattenArray(nestedArray);
console.log(nestedArray.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
