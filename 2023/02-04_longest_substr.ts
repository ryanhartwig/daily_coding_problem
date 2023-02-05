(() => {

  /* 

  Longest Substring Without Repeating Characters:

  Given a string s, find the length of the longest substring without repeating characters.

  Example:

  Input: "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  
  */
  
  const longestSubstring = (s: string): number => {

    let freq = new Array(26).fill(0);
    let windowStart = 0;
    let maxLength = 0;


    for (let i = 0; i < s.length; i++) {
      const char = s.charCodeAt(i) - 97;
      
      if (freq[char] > 0) {
        // Set maxLength appropriately based on current window size
        maxLength = Math.max(maxLength, i - windowStart);

        for (let j = windowStart; j < i; j++) {
          if (s[j] === s[i]) {
            windowStart = j + 1;
            break;
          } else {
            freq[j]--;
          }
        }
      } else {
        freq[char]++;
      }
    }

    return Math.max(maxLength, s.length - windowStart)
  }




  console.log(longestSubstring('abcabcbb'));
  console.log(longestSubstring('bbbbb'));
  console.log(longestSubstring('pwwkew'));
  console.log(longestSubstring('dvdf'));
  console.log(longestSubstring('tmmzuxt'));
  
  
})()