/* 

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:


Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.

aaBABba
[1, 2, ...]

aaBABBa 
[1, 3, ...]


aaabbc
k = 3
[3, 2, 1]



Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

*/

const getMax = (freq: number[]) => {
  let maxfreq = 0;
  freq.forEach(f => maxfreq = Math.max(f, maxfreq));
  return maxfreq;
}

function characterReplacement(s: string, k: number): number {
  let max = 0;
  const freq: number[] = Array(26).fill(0);

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right].charCodeAt(0) - 65]++;

    // check max sum minus total sum against k
    let maxfreq = getMax(freq);

    while ((right - left + 1) - maxfreq > k) {
      freq[s[left++].charCodeAt(0) - 65]--;
      maxfreq = getMax(freq);
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
};


console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
