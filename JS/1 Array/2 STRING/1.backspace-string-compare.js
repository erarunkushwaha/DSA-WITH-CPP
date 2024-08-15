/**
 * 

 Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty
 */

//  brute force method
// const removeHash = (string) => {
//   const array = string.split("");
//   let filteredArray = [];

//   for (let index = 0; index < array.length; index++) {
//     if (array[index] !== "#") {
//       filteredArray.push(array[index]);
//     } else {
//       filteredArray.pop();
//     }
//   }
//   return filteredArray.join("");
// };

// let backspaceCompare = function (s, t) {
//   const string1 = removeHash(s);
//   const string2 = removeHash(t);
//   if (string1 === string2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const res = backspaceCompare("ab#c", "ad#c");

// console.log("res::", res);

let backspaceCompare = function (s, t) {
  let pointerS = s.length - 1;
  let pointerT = t.length - 1;
};
const res = backspaceCompare("ab#cd##", "ad#c");
console.log("res::", res);
