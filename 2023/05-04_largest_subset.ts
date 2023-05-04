/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

working subset []

check against length of working
  if > reassign

if ind >= length of arr - length of working
  return

*/

(() => {

  const checkCondition = (i: number, j: number) => i % j === 0 || j % i === 0;
  
  const largestSubset = (arr: number[]) => {
    let largestSubset: number[] = [];

          

    for (let i = 0; i < arr.length; i++) {
      if (i >= arr.length - largestSubset.length) break;
      let current = arr[i];
      const working: number[] = [arr[i]];

      for (let j = i + 1; j < arr.length; j++) {
        if (checkCondition(current, arr[j])) {
          working.push(arr[j]);
          current = arr[j];
        }
      }

      if (working.length > 1 && working.length > largestSubset.length) largestSubset = working;
    }

    return largestSubset;
  }

  console.log(largestSubset([3, 5, 10, 20, 21])); // [5, 10, 20]
  console.log(largestSubset([1, 3, 6, 24])); // [1, 3, 6, 24]
  
})()