/**
 * Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.
 */
// brute force
// const input = "pwwkew";

// var lengthOfLongestSubstring = function (s) {
//   if (s.length <= 1) return s.length;

//   let longest = 0;

//   for (let left = 0; left < s.length; left++) {
//     let seenChars = {},
//       currentLength = 0;

//     for (let right = left; right < s.length; right++) {
//       const currentChar = s[right];

//       if (!seenChars[currentChar]) {
//         currentLength++;
//         seenChars[currentChar] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }

//   return longest;
// };

// const res = lengthOfLongestSubstring(input);

// console.log("res::", res);

// sliding windiw--

const string = "abcbdaac";

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let longest = 0;
  let left = 0;
  let hashMap = {};

  for (let right = 0; right < s.length; right++) {
    if (hashMap[s[right]] >= left) {
      left = hashMap[s[right]] + 1;
    }
    hashMap[s[right]] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(lengthOfLongestSubstring(string));
