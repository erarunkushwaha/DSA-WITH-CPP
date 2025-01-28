
const bulleShort = (arr,n) => {

if( n == 1 ){
    return arr;
}

for(let i= 0; i<n -1;i++){
    if(arr[i] > arr[i + 1]){
       [arr[i],arr[i + 1]] = [arr[ i + 1], arr[i]];
    }
  
}
    return bulleShort(arr,n-1)

}
const input = [1,10,7,6,14,9];
console.log(bulleShort(input,input.length ))