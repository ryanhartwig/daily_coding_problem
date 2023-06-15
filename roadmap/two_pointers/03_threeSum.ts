/* 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.



Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

store each triplet as hashed string in set

*/

// Brute force
function threeSum(nums: number[]): number[][] {
  const threeSums = new Set<string>();
  
  for(let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const [a, b, c] = [nums[i], nums[j], nums[k]];
        if (a + b + c === 0) {
          threeSums.add([a,b,c].sort().join('%'));
        }
      }
    }
  }

  console.log(threeSums);

  return [...threeSums].map(s => s.split('%').map(s => Number(s)));
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));