function Reverse(num){
    let rev = 0;

    while(num != 0){
        let temp = num % 10;
         rev  = rev*function isPalindrome(x) {
            // Edge case: negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
            if (x < 0 || (x % 10 === 0 && x !== 0)) {
                return false;
            }
        
            let reversed = 0;
            let original = x;
        
            while (x > 0) {
                let digit = x % 10; 
                reversed = reversed * 10 + digit; 
                x = Math.floor(x / 10); 
            }
    
            return reversed === original;
        }
        
        console.log(isPalindrome(121)); 
        console.log(isPalindrome(-121)); 
        console.log(isPalindrome(10)); 
         + temp
        num = Math.trunc(num/10);
    }
    return rev;
}


console.log(Reverse(121));