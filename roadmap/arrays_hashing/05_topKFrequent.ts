/* 

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

// Brute force approach, sorting all values after identifying frequency

export function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  nums.forEach(n => freq.set(n, (freq.get(n) || 0) + 1));
  return [...freq].sort(([_, a], [__, b]) => b - a).slice(0, k).map(([key]) => key);
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1, 3, 5, 3, 3, 8, 8, 8, 8], 2));
// console.log(topKFrequent([1], 1));

// Optimized 

export function topKFrequent2(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  const bucket: number[][] = Array(nums.length + 1).fill(null).map(() => []);
  const result: number[] = [];

  nums.forEach(n => freq.set(n, (freq.get(n) || 0) + 1));
  
  freq.forEach((freq, num) => bucket[freq].push(num));

  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    const current = bucket[i];

    if (current && current.length) {
      while (current.length && result.length < k) {
        result.push(current.pop()!);
      }
    }
  }

  return result;
};

// console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent2([1, 3, 5, 3, 3, 8, 8, 8, 8], 2));
// console.log(topKFrequent2([1], 1));


// Refactor 

export function topKFrequent3(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  const bucket: number[][] = Array(nums.length + 1).fill(null).map(() => []);

  nums.forEach(n => freq.set(n, (freq.get(n) || 0) + 1));
  
  freq.forEach((freq, num) => bucket[freq].push(num));

  return bucket.flat().slice(-k);
};


console.log(topKFrequent3([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent3([1, 3, 5, 3, 3, 8, 8, 8, 8], 2));
console.log(topKFrequent3([1], 1));