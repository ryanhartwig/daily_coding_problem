/* 

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

export function groupAnagramsOld(strs: string[]): string[][] {
  const groups: string[][] = [];
  let strings = [...strs];

  while (strings.length) {
    const current = strings.shift()!;
    const pairs = [current];
    const freq = Array(26).fill(0);
    for (const char of current.split('')) freq[char.charCodeAt(0) - 96]++;

    strings = strings.filter(str => {
      const compFreq = Array(26).fill(0);
      for (const char of str.split('')) compFreq[char.charCodeAt(0) - 96]++;

      if (compFreq.every((v, i) => compFreq[i] === freq[i])) {
        console.log('match')
        pairs.push(str);
        return false;
      }
      return true;
    });

    groups.push(pairs);
  }

  return groups;
};

// console.log(groupAnagramsOld(["eat","tea","tan","ate","nat","bat"]));


// Alternate

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    const existing = [...(groups.get(sorted) ?? []), str];
    groups.set(sorted, existing);
  }

  return Array.from(groups.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));