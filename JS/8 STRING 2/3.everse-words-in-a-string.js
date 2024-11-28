/**
 *
 * solve using two pointer apporach
 * swap start char with end char unit start become greater than last one
 */

const reverseWordInString = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

console.log(
  "test1::",
  reverseWordInString(["c", "a", "t", " ", "b", "a", "t"])
);
console.log("test2::", reverseWordInString(["c"]));
