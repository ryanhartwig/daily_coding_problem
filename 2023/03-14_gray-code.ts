/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Gray code is a binary code where each successive value differ in only one bit, as well as when wrapping around. Gray code is common in hardware so that we don't see temporary spurious values during transitions.

Given a number of bits n, generate a possible gray code for it.

For example, for n = 2, one gray code would be [00, 01, 11, 10].

pseudo:
fill array of n values with 0
from right to left, try changing values comparing against set
  if unique, add to set & output array

*/

(() => {

  const gray = (n: number): string[] => {
    if (!n || n < 0) return [];
    const initial = Array(n).fill('0');
    const output: string[] = [initial.join('')];
    const existing = new Set<string>(output);

    const getValues = (current: string[] = initial) => {
      const working = [...current];


      for (let i = 0; i < n; i++) {
        const greyCode = [
          ...working.slice(0, i), 
          Number(!Number(working[i])).toString(), 
          ...working.slice(i + 1)
        ].join('');

        if (existing.has(greyCode)) {
          continue;
        } 
        
        else {
          output.push(greyCode);
          existing.add(greyCode);
          getValues(greyCode.split(''));
        }
      }
    }

    getValues();
    return output;
  }

  console.log(gray(2)); // [00, 10, 11, 01]
  console.log(gray(3));
  console.log(gray(4));
  
  
})()