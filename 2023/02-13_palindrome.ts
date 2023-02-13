/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a string which we can delete at most k, return whether you can make a palindrome.

For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

*/

;(() => {

  const palindrome = (s: string, k: number) => {
    const invalidIndices = new Set<number>();


    for (let i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
        invalidIndices.add(i);
      }
    }

    if (invalidIndices.size > k) return false;
    let palindrome = true;
    const valid = s.split('').filter((s, i) => !invalidIndices.has(i)).join('');
    for (let i = 0, j = valid.length - 1; i < j; i++, j--) {
      if (valid[i] !== valid[j]) palindrome = false;
    }

    return palindrome;
  }

  console.log(palindrome('waterrfetawx', 2)); // true
  console.log(palindrome('waterrfetawx', 1)); // false
  
})();


// ChatGPT 
;(() => {

  function canFormPalindrome(s: string, left: number, right: number, k: number, memo: Map<string, boolean>): boolean {
    if (left >= right) {
      return true; // base case: single character is a palindrome
    }
    const key = `${left}-${right}-${k}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }
    if (s[left] === s[right]) {
      return canFormPalindrome(s, left+1, right-1, k, memo); // characters match, no deletion needed
    }
    if (k === 0) {
      memo.set(key, false); // can't delete any more characters
      return false;
    }
    const canDeleteLeft = canFormPalindrome(s, left+1, right, k-1, memo); // try deleting left character
    const canDeleteRight = canFormPalindrome(s, left, right-1, k-1, memo); // try deleting right character
    memo.set(key, canDeleteLeft || canDeleteRight); // remember result for memoization
    return canDeleteLeft || canDeleteRight;
  }
  
  function palindrome(s: string, k: number) {
    return canFormPalindrome(s, 0, s.length-1, k, new Map<string, boolean>());
  }
  
  console.log(palindrome('waterrfetawx', 2)); // true
  console.log(palindrome('watwerrfetawx', 3)); // true
  
})();

