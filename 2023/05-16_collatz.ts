/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?

*/

;(() => {

  const collatz = (n: number) => {
    const sequence = [n];
    let current = n;
    while (current > 1) {
      if (current % 2 == 0) {
        current = current / 2;
        sequence.push(current)
      } else {
        current = (3 * current) + 1;
        sequence.push(current);
      }
    }

    return sequence;
  }


  let maxlength =0;
  let maxlengthvalue = 0;
  for (let i = 1000000; i > 1; i--) {
    const currentresult = collatz(i).length;
    if (currentresult > maxlength) {
      maxlength = currentresult;
      maxlengthvalue = i;
    }
  }
  
  console.log(maxlength);
  console.log(maxlengthvalue);
  

  
})();