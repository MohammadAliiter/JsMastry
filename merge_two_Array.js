let arr1 = [1, 20, 5];
let arr2 = [21,22,12];
let arr3 = [];

console.log([...arr1, ...arr2]);

for(let i = 0; i < arr1.length; i++){
    arr3[i] = arr1[i]; 
}

 console.log(arr3);

 for(let i = 0; i < arr2.length; i++){
    arr3[arr1.length + i] = arr2[i];
 }

 console.log(arr3);