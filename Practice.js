/*const Person = {
    name: "Mohammad Ali",
    age: 25,
}
/*
console.log(Person.name);
console.log(Person['name']);
console.log(Person['age']);

const Students = {};

Students.name = "Mohammad Ali";
Students['age'] = 25;

console.log(Students);

for(let key in Person){
    console.log(`This is key of Object ${key} the Value of the key is ${Person[key]}`);
}



const data =  "Optimizaum";

const count = {};

for(let char of data){
    
    count[char]  = (count[char] || 0) + 1
}
console.log(count);

const maxCount = 0;

for(let i of count){

    if(count[i] > maxCount){
        maxCount = count[i];
    }
}

console.log(maxCount);
   */
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.all([Promise.resolve().then(() => {
    console.log("Hi");
})]);

console.log("C");



