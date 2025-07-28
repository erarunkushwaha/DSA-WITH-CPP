
const selfProduct = (nums: number[]) : number[] => {
    let ans : number[] = [];

    for(let i =0; i< nums.length; i++){
        let prod : number =1;
        for(let j = 0; j< nums.length; j++){
            if(i !== j){
               prod = prod * nums[j];
            }
        }
        ans.push(prod)
    }
    return ans;
}
const ans = selfProduct([1,2,3,4]);
console.log("ans",ans)




const selfProductOptmial = () => {
const arr = [1,2,3,4];
const n= arr.length;
let prefix = new Array(n).fill(1);
let suffix = new Array(n).fill(1);
let result = new Array(n).fill(1);

// calculate prefix
for(let i =1; i<n ;i ++){
  prefix[i] = arr[i-1] * prefix[i-1];
}
console.log(prefix)

for(let i= n-2; i >= 0; i--){
  suffix[i] = arr[i+1] * suffix[i+1];
}

console.log(suffix)

for(let i=0; i<n ;i++){
  result[i] = suffix[i] * prefix[i];
}
console.log(result)
}


// --- /// --- //. --- //.  --- // --- // -- // -- // -- // 



export {}