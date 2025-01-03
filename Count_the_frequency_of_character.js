 const data = "Optimizaum";

 const count = {};

 for(let char of data){
    count[char] = (count[char] || 0) + 1;
 }


console.log("Character Frequency:", count);

let maxCount = 0;
let maxChar = '';

for(char in count){
    if(count[char] > maxCount){
        maxCount = count[char];
        maxChar = char;
    }
}

console.log(`The char is ${maxChar} and the Count is ${maxCount}`);
