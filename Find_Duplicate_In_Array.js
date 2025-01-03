const findTheDuplicateNumber = (arr) => {
       
       const seen = new Set();
       const duplicate = new Set();
       const n = arr.length

       for(num of arr){
          if(seen.has(num)){
            duplicate.add(num);
          }
          else{
            seen.add(num);
          }
       }

    return [ ... duplicate ]
}







console.log(findTheDuplicateNumber([1, 2, 3, 4, 3, 2, 5]));