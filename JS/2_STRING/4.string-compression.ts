// brute force method
// not accurate but ok ok
const compressString = (char: string[]): string[] => {
  let map = new Map<string, number>();
  let ans: string[] = [];
  for (let i = 0; i < char.length; i++) {
    map.set(char[i], (map.get(char[i]) || 0) + 1);
  }

  for (const [key, value] of map) {
    ans.push(key);
    ans.push(value.toString());
  }
  return ans;
};

const input1 = ["a", "a", "a","b", "b,", "c", "c", "c", "d", "d", "d", "d","e"];
// console.log("ans1::", compressString(input1));

const compressStringOptmial = (char: string[]): string[] => {

  let ansIndexHolder:any = 0;

  for(let i =0; i<char.length; i++){
    let counter = 0;
    let currentPointer = char[i];

    while(i < char.length && char[i] === currentPointer ){
      counter++;
      i++;
    }
    if(counter === 1){
      char[ansIndexHolder] = currentPointer;
      ansIndexHolder++;
    } else {


      char[ansIndexHolder] = currentPointer;
      ansIndexHolder++;
    for(let c of counter.toString()){
  char[ansIndexHolder]=c.toString();
      ansIndexHolder++;

      
    }
    
    }
    i--;


  }

  return ansIndexHolder;
};


const input2 = ["a", "a", "a","a","a","a","a","a","a","a","a","a","a","a","b", "b", "c", "c", "c", "d", "d", "d", "d","e"];
console.log("ans1::", compressStringOptmial(input2));

export {};
