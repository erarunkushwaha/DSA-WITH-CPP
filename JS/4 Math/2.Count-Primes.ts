

function countPrimes(n: number): number {

    const isPrimeArr = new Array(n).fill(true);
    let count = 0;



    for(let i = 2; i<n; i++){

        if(isPrimeArr[i]){
            count++;

            for(let j = i * i; j<n; j = j+i){
isPrimeArr[j] = false;
            }


        }

    }


    return count;
    
};


console.log("ans1::",countPrimes(10))