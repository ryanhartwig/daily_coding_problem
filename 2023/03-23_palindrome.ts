/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false, since there's no rearrangement that can form a palindrome.

*/

(() => {

  const canPalindrome = (str: string) => {
    const chars = new Set();
    
    for (let i = 0; i < str.length; i++) {
      chars.delete(str[i]) || chars.add(str[i]);
    }

    return chars.size <= 1;
  }

  console.log(canPalindrome('carrace')); // true
  console.log(canPalindrome('daily')); // false
  console.log(canPalindrome('abccbaf')); // true
  
})()