
const isPalindrome = (str, i, j) => {
    if(i>j){
      return true;
    }
    
    if(str[i]!== str[j]){
        return false;
    }
    return isPalindrome(str,i+1,j-1)
    
    
  };


  console.log(isPalindrome(input2, 0, input2.length - 1));
  