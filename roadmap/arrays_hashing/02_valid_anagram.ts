/* 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/

const isAnagram = (s: string, t: string): boolean => {
  const map = new Map<string, number>();

  s.split('').forEach(c => map.set(c, (map.get(c) ?? 0) + 1));

  const canRemove = t.split('').every(c => {
    const current = map.get(c);

    if (!current || current - 1 < 0) return false;
    return map.set(c, current - 1);
  });
  if (!canRemove) return false;
  return Array.from(map.values()).every(v => !v);
};

console.assert(isAnagram('anagram', 'nagaram'));
console.assert(!isAnagram('rat', 'car'));