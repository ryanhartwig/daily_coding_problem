/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].


approach:
keep track of left pointer / starting index of potential match when coming across the start of a pattern
keep track of pattern index 
if current value of str does not equal pattern at index minus pattern index 
  pattern index = current index + 1
else
  if index - pattern index equals pattern's length - 1
    add the left index to indices
    set left index to current if matches pattern[0], otherwise next

  continue

*/

;(() => {

  const occurencesIndices = (str: string, pattern: string) => {
    const indices: number[] = [];
    let left: number = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== pattern[i - left]) left = i + 1;
      else if (i - left === pattern.length - 1) {
        indices.push(left);
        left = str[i] === pattern[0] ? i : i + 1;
      }
    }
    return indices;
  }

  console.log(occurencesIndices('abracadabra', 'abr')); // [0, 7]
  
})();