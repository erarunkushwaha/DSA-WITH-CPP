

const findSingleElementinSortedArray = (arr:number[]) : number => {

    let start= 0;
    let end = arr.length -1;

    if(arr.length === 0) return -1;
    if(arr.length === 1) return arr[0]

    while(start <= end){
        let mid = Math.floor(start + (end - start) /2);



        // check if first elemet is mid or ans
        if(mid === 0 && arr[mid] !== arr[mid+1]) return arr[mid]; 

        // check if last element is mid or ans
        if(mid === arr.length -1 && arr[mid] !== arr[mid -1]) return arr[mid];

        // check if mid is the answer
        if(arr[mid-1] !== arr[mid] && arr[mid] !== arr[mid+1]) return arr[mid];

        // check for the even and odd 
        if(mid % 2 === 0){
            // left and right space is even

            if(arr[mid - 1] === arr[mid]) {
                // left search
                end = mid -1;
            } else {
                // right search
                start = mid +1;
            }

        } else {
            // left and right space is odd
            if(arr[mid - 1] === arr[mid]){
                // right search
                start = mid +1;
            } else {
                // left search
                end = mid -1;
            }
        }

    }

return -1;
}

const input1 = [1,1,2,3,3,4,4,8,8]
const input2 = [3,3,7,7,10,11,11]

console.log("ans1",findSingleElementinSortedArray(input1));
console.log("ans2",findSingleElementinSortedArray(input2));



export = {};