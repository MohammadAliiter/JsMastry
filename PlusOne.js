
var plusOne = function(digits) {
    
    for(let i = digits.length-1; i >= 0; i--){
           
            if(digits[i] < 9){
                digits[i]++;
                return digits;
            }

            digits[i]=0;
    }

    

    let newDigits = new Array(digits.length + 1); 
    newDigits[0] = 1; 
    
    
    for (let i = 0; i < digits.length; i++) {
        newDigits[i + 1] = digits[i];
    }





/* 
      digits.splice(0,0,1);                    //  digits.unshift(1)      //  digits = [1, ...digits] 
      
      */
    return newDigits;
};