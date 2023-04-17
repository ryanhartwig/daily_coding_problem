/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

*/

(() => {

  const minpalindromes = (str: string) => {
    const palindromes: string[] = [];
    let palindromeLeftPointer: number | undefined = undefined;

    let chars: string[] = [];

    for (let i = 0; i < str.length; i++) {
      chars.push(str[i]);

      const current = chars.length - 1;
      const lastIndex = chars.length - 2;
      const secondLastIndex = chars.length - 3;

      if (palindromeLeftPointer !== undefined) {
        if (chars[palindromeLeftPointer - 1] === chars[current]) {
          if (i === str.length - 1) {
            palindromes.push(chars.splice(palindromeLeftPointer - 1, current + 1).join(''));
            palindromeLeftPointer = undefined;
            continue;
          } else {
            palindromeLeftPointer--; 
            continue;
          }
        } else {
          palindromes.push(chars.splice(palindromeLeftPointer, current).join(''));
          palindromeLeftPointer = undefined;
          continue;
        }
      } else {
        if ([chars[lastIndex], chars[secondLastIndex]].includes(chars[current])) {
          palindromeLeftPointer = chars[lastIndex] === chars[current]
            ? lastIndex
            : secondLastIndex
          ;
        }
      }
    }

    if (palindromeLeftPointer !== undefined) {
      palindromes.push(chars.splice(palindromeLeftPointer).join(''));
    }

    palindromes.push(...chars);

    return palindromes;
  }

  console.log(minpalindromes('racecarannakayak'));
  console.log(minpalindromes('abc'));
  
})()