function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    let result = "";

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        if( right - left + 1 > maxLength){
            result = s.substring(left,  right+1 )
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("dvdf"));
