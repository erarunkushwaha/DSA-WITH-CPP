// reverse a string

const reverseString= (str,i,j) => {
if(i>j) {
    return str;
}
const arr = str.split("");
[arr[i],arr[j]]= [arr[j],arr[i]];
str = arr.join("");
i++;
j--;
return reverseString(str,i,j);
}


const str = "abcde"
const ans = reverseString(str,0,str.length-1)

console.log("ans::",ans) // edcba