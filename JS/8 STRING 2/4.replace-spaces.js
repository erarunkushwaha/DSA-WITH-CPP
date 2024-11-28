/**
 * You have been given a string 'STR' of words. You need to replace all the spaces between words with “@40”.

Detailed explanation ( Input/output format, Notes, Images )
Constraints:
1 <= T <= 50
0 <= |STR| <= 100

Where ‘|STR|’ is the length of a particular string including spaces.

Time limit: 1 sec
 */

const replaceSpaces = (str) => {
  return str.replaceAll(" ", "@40");
};

console.log(
  "test1::",
  replaceSpaces("tesCoding Ninjas Is A Coding Platformtsample")
); // Coding@40Ninjas@40Is@40A@40Coding@40Platform
console.log("test2::", replaceSpaces("Hello World")); // Hello@40World
