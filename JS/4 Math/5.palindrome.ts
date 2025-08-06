const palindrome = (n: number) : boolean=> {
    let revNum : number=0;
    let copyOfn = n;


        if(n < 0 ){
            return false
        }


    while(n !==0){
        const dig = n % 10;
       
        revNum = (revNum * 10) + dig;

        n = Math.trunc(n/10)
    }

    return copyOfn === revNum;


}

console.log("palindrome::",palindrome(-12345))
console.log("palindrome2::",palindrome(535))

