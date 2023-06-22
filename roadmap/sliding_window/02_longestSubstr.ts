/* 

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

// function lengthOfLongestSubstring(s: string): number {
//   let max = 0, left = 0;
//   const freq = new Set<string>();

//   for (let right = 0; right < s.length; right++) {
//     console.log(left, right);
//     let current = s[right];

//     if (freq.has(current)) {
//       max = Math.max(max, right - left);
      
//       while (freq.has(current)) {
//         freq.delete(s[left++]);
//       };
//     } else {
//       freq.add(current);
//     }
//   }
//   max = Math.max(max, s.length - 2 - left);
//   return max;
// };

// // console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('bbbbb'));


function lengthOfLongestSubstring(s: string): number {
  let max = 0, left = 0;
  const freq = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    if (freq.delete(s[right])) {
      while (s[left] !== s[right]) freq.delete(s[left++]);
      left++;
    }

    freq.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); 
console.log(lengthOfLongestSubstring('pwwkew')); 
console.log(lengthOfLongestSubstring('bbbbb')); 