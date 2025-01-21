function longestPalindrome(s) {
    if (s.length < 1) return ""; // Base case

    let start = 0, end = 0;

    // Helper function to expand around the center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;  // Expand left
            right++; // Expand right
        }
        return right - left - 1; // Length of palindrome
    }

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        let len1 = expandAroundCenter(i, i);
        // Even-length palindrome
        let len2 = expandAroundCenter(i, i + 1);
        let maxLength = Math.max(len1, len2);

        // Update the start and end pointers if a longer palindrome is found.
        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }
    }

    return s.substring(start, end + 1); // Extract the longest palindrome.
} 


console.log(longestPalindrome("cbbd")); 

console.log(longestPalindrome("cabad")); 
 
 
