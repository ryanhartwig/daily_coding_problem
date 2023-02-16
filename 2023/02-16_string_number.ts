/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by LinkedIn.

Given a string, return whether it represents a number. Here are the different kinds of numbers:

"10", a positive integer
"-10", a negative integer
"10.1", a positive real number
"-10.1", a negative real number
"1e5", a number in scientific notation
And here are examples of non-numbers:

"a"
"x 1"
"a -2"
"-"

*/

(() => {

  const isNumber = (s: string) => {
    return !isNaN(Number(s));
  }

  
  
  // Without using NaN approach:
  
  const validate = (s: string) => {
    return s.split('').every((c, i) => {
      if (!['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(c)) {
        if (c === '-' && i === 0 && s.length !== 1) {
          return true;
        } else if (c === 'e' && i !== 0 && i !== s.length - 1 && s.indexOf('e') === s.lastIndexOf('e')) {
          return true;
        } else if (c === '.' && s.indexOf('.') === s.lastIndexOf('.') && i !== s.length - 1) {
          return true;
        }
        return false;
      }
      return true;
    })
  }

  console.log(validate('313089713e4'));
  console.log(validate('10'));
  console.log(validate('-10'));
  console.log(validate('-10.'));
  console.log(validate('a'));

  
})()