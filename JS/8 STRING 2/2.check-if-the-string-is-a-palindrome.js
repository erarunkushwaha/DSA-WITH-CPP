/***
 * if reverse of a string is same then that string is palindrom
 * example--> input--> bob--> after reverse--->output is--> bob--> means this is palindrom
 */

/***
 * Problem statement
You are given a string 'S'. Your task is to check whether the string is palindrome or not. For checking palindrome, consider alphabets and numbers only and ignore the symbols and whitespaces.

Note :

String 'S' is NOT case sensitive.
Example :

Let S = “c1 O$d@eeD o1c”.
If we ignore the special characters, whitespaces and convert all uppercase letters to lowercase, we get S = “c1odeedo1c”, which is a palindrome. Hence, the given string is also a palindrome.
Detailed explanation ( Input/output format, Notes, Images )
Constraints :
1 <= T <= 100 
1 <= Length(S) <= 10^4

Where 'T' denotes the number of test cases and 'S' denotes the given string.

Time Limit : 1 sec
Sample Input 1 :
2
N2 i&nJA?a& jnI2n
A1b22Ba
Sample Output 1 :
Yes
No
Explanation 1 :
For the first test case, S = “N2 i&nJA?a& jnI2n”. If we ignore the special characters, whitespaces and convert all uppercase letters to lowercase, we get S = “n2injaajni2n”, which is a palindrome. Hence, the given string is also a palindrome.

For the second test case, S = “A1b22Ba”. If we ignore the special characters, whitespaces and convert all uppercase letters to lowercase, we get S = “a1b22ba”, which is not a palindrome. Hence, the given string is not a palindrome.
Sample Input 2 :
3
codingninjassajNiNgNidoc
5?36@6?35
aaBBa@
Sample Output 2 :
Yes
Yes
No
 */

// solution --> space complesity 0(1)

/**
 * solve with two pointer apporach
 * make start and end
 * compare if character of start == character of end then return true else false
 */

const checkIfStringIsPalindrom = (s) => {
  let filteredString = [];
  for (char of s) {
    let lowerChar = char.toLowerCase();
    if (
      (lowerChar >= "a" && lowerChar <= "z") ||
      (lowerChar >= "0" && lowerChar <= "9")
    ) {
      filteredString.push(lowerChar);
    }
  }

  let start = 0;
  let end = filteredString.length - 1;
  while (start < end) {
    if (filteredString[start] !== filteredString[end]) {
      return "NO";
    } else {
      start++;
      end--;
    }
  }
  return "YES";
};
console.log("ans1::", checkIfStringIsPalindrom("N2 i&nJA?a& jnI2n")); // yes
console.log("ans2::", checkIfStringIsPalindrom("A1b22Ba")); //no
console.log("ans3::", checkIfStringIsPalindrom("5?36@6?35")); //yes
console.log("ans4::", checkIfStringIsPalindrom("aaBBa@")); //no
