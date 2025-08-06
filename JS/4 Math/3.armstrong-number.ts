const isArmStrongNumber = (n:number):boolean =>{

    let oldn = n;
    let total = 0;

    while(n !== 0){
      const lastDigit =  n % 10
      const cube = lastDigit * lastDigit *lastDigit
      total = total + cube;
      n = Math.floor(n / 10)
    }

    if(oldn === total){
        return true;
    }

    return false;
} 

console.log("ans1:",isArmStrongNumber(1));
console.log("ans2:",isArmStrongNumber(2));
console.log("ans3:",isArmStrongNumber(153));
