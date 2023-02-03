(() => {

  /* 

  Given a word W and a string S, find all starting indices in S which are anagrams of W.

  For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.
  

  left pointer iterates start to end
  if left pointer is on a character within s
    right pointer iterates forward until finding all characters of string or returns early if cannot find
      if matches string
        add left index
  
  */
  
  const anagaramIndex = (w: string, s: string) => {
    const indices: number[] = [];
    const chars = new Set(w.split(''));

    s.split('').forEach((c, i, arr) => {
      if (chars.has(c)) {
        const dup = new Set(w.split(''));
        arr.slice(i).every(char => {
          const exists = dup.delete(char);
          if (exists && !dup.size) indices.push(i);
          return exists;
        })
      }
    });
    
    return indices;
  }

  console.log(anagaramIndex('ab', 'abxaba'));

  // ChatGPT's optimized runtime solution
  const anagramIndices = (w: string, s: string) => {
    let n = w.length, m = s.length;
    const indices: number[] = [];
    if (n > m) return indices;
    const freq = Array(26).fill(0);
    for (let i = 0; i < n; i++) {
      freq[w.charCodeAt(i) - 97]++;
    }
    let left = 0, right = 0;
    while (right < m) {
      if (freq[s.charCodeAt(right++) - 97]-- >= 1) n--;
      if (n === 0) indices.push(left);
      if (right - left === w.length && freq[s.charCodeAt(left++) - 97]++ >= 0) n++;
    }
    return indices;
  };


  console.log(anagramIndices('ab', 'abxaba'));

  
})()



/* ChatGPT explanation



Yes, the time and space complexity of your solution can be improved upon.

Time Complexity: Your solution has a time complexity of O(n^2), where n is the length of string S. This is because, for each character in the string S, you are slicing the string S from that index and checking if it is an anagram of the word W. A better approach would be to use a sliding window technique, where you keep a track of the frequency of characters in a window of size equal to the length of W and slide the window by one character at a time. This would reduce the time complexity to O(n).

Space Complexity: Your solution has a space complexity of O(n), where n is the length of the word W. This is because you are using a Set to keep track of the characters in the word W. Instead, you could use an array of size 26 (one for each letter in the alphabet) to keep track of the frequency of each character in the word W. This would reduce the space complexity to O(1).

Here is an example implementation of the improved solution:




 */