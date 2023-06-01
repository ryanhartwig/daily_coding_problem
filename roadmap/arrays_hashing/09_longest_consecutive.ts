/* 

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

export function longestConsecutive(nums: number[]): number {
  const values: number[] = [];
  let lastVal: number;
  let currentConsecutive = 1;
  let max = 0;
  let firstIteration = true;

  nums.forEach((n) => {
    values[n] = n;
  });

  values.forEach((v, i) => {
    if (firstIteration) {
      firstIteration = false;
      lastVal = v;
      return;
    }

    if (v === lastVal + 1) {
      currentConsecutive++;
      lastVal = v;
      return;
    }

    max = Math.max(max, currentConsecutive);
    lastVal = v;
    currentConsecutive = 1;
  });

  max = Math.max(max, currentConsecutive);
  
  return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));

// Revision

export function longestConsecutiveAlt(nums: number[]): number {
  const numberSet = new Set(nums);
  let max = 0;

  for (const num of nums) {
    if (!numberSet.has(num - 1)) {
      let count = 1;
      let current = num;

      while (numberSet.has(current + 1)) {
        count++;
        current++;
      }

      max = Math.max(count, max);
    }
  }

  return max;
};

console.log(longestConsecutiveAlt([100,4,200,1,3,2]));
console.log(longestConsecutiveAlt([0,3,7,2,5,8,4,6,0,1]));