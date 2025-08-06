const reverseNumber = (n: number) : number=> {
    let revNum=0;

    const INT_MAX = Math.pow(2, 31) - 1;  // 2147483647
const INT_MIN = -Math.pow(2, 31); 

    while(n !==0){
        const dig = n % 10;
        // if(revNum > Math.floor(Number.MAX_SAFE_INTEGER / 10 ) || revNum < Math.trunc(Number.MIN_SAFE_INTEGER / 10)){
        //     return 0;
        // }
         if(revNum > Math.floor(INT_MAX / 10 ) || revNum < Math.trunc(INT_MIN / 10)){
            return 0;
        }
        revNum = (revNum * 10) + dig;

// to handle negative value as floor value
        n = Math.trunc(n/10)
    }

    return revNum;

}

console.log("reverseNumber::",reverseNumber(-12345))
console.log("reverseNumber2::",reverseNumber(1534236469))

