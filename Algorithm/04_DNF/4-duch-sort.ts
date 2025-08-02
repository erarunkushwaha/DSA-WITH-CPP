
const duchSort = (arr:number[]) : number[] => {

let low = 0;
let mid = 0;
let high = arr.length -1;

while(mid <= high){

    if(arr[mid]===0){
        [arr[mid],arr[low]] = [arr[low],arr[mid]]
        low++;
        mid++;
    } else if( arr[mid]=== 1){
        mid++
    } else {
        [arr[high],arr[mid] ] = [arr[mid], arr[high]];
        high--;
        }

}


    return arr;
}



console.log("ans::", duchSort([1, 2, 0, 0, 1, 2, 2, 1, 0, 0]));


