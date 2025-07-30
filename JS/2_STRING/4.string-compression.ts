
// brute force method
const compressString = (char: string[]): string[] => {

    let map = new Map<string,number>();
   let ans:string[] = [];
    for(let i =0; i<char.length; i++){
        map.set(char[i], (map.get(char[i]) || 0)+1)
    }

for( const [key, value] of map ){

    ans.push(key);
    ans.push(value.toString());


}
  return ans;

}

const input1 = ['a','a','b','b,','c','c','c','d','d','d','d'];
console.log( "ans1::",compressString(input1))
export {}