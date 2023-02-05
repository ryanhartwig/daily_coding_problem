(() => {

  /* 

  Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  */

  const findAnagrams = (s: string, p: string): number[] => {
    const anagramStartIndices: number[] = [];
    const anagramFreq = Array(26).fill(0);
    const windowFreq = Array(26).fill(0);

    

    for (let i = 0; i < p.length; i++) {
      anagramFreq[p.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < p.length; i++) {
      windowFreq[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= s.length - p.length; i++) {
      if (anagramFreq.every((count, i) => windowFreq[i] === count)) {
        anagramStartIndices.push(i);
      }

      // Shift window forward
      windowFreq[s.charCodeAt(i) - 97]--;
      windowFreq[s.charCodeAt(i + p.length) - 97]++;
    }

    return anagramStartIndices;
  }

  console.log(findAnagrams('cbaebabacd', 'abc'));  
  console.log(findAnagrams('abab', 'ab'));  
  
  
})()



/* 

 const findAnagrams = (s: string, p: string): number[] => {
    const anagramStartIndices: number[] = [];
    const anagramFreq = Array(26).fill(0);
    const windowFreq = Array(26).fill(0);

    

    for (let i = 0; i < p.length; i++) {
      anagramFreq[p.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < p.length; i++) {
      windowFreq[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= s.length - p.length; i++) {
      if (anagramFreq.every((count, i) => windowFreq[i] === count)) {
        anagramStartIndices.push(i);
      }

      // Shift window forward
      windowFreq[s.charCodeAt(i) - 97]--;
      windowFreq[s.charCodeAt(i + p.length) - 97]++;
    }

    return anagramStartIndices;
  }


*/