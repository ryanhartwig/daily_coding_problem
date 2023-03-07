/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You're given a string consisting solely of (, ), and *. * can represent either a (, ), or an empty string. Determine whether the parentheses are balanced.

For example, (()* and (*) are balanced. )*( is not balanced.


if )
  if open === 0
    break / return false
  else open--
if (
  open++
if *

  
*/

(() => {

  const isBalanced = (s: string) => {
    const recursivelyValidate = (i: number = 0, open: number = 0, curr?: string): boolean => {
      let currentOpen = open;
      if (i >= s.length) return currentOpen === 0;

      let char = curr ?? s[i];

      if (char === '(') {
        currentOpen++;
      }
      else if (char === ')') {
        if (open === 0) return false;
        currentOpen--;
      }
      else if (char === '*') {
        if ([
          recursivelyValidate(i, currentOpen, '('),
          recursivelyValidate(i, currentOpen, ')'),
          recursivelyValidate(i + 1, currentOpen),
        ].some(n => {

          return !!n;

        })) return true;
        else return false;
      }
      return recursivelyValidate(i + 1, currentOpen);
    }

    return recursivelyValidate();
  }

  console.log('is balanced: ', isBalanced('(()*'));
  console.log('is balanced: ', isBalanced('(*)'));
  console.log('is balanced: ', isBalanced(')*('));
  
})()