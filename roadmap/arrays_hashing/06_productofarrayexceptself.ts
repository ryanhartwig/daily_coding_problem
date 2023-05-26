/* 

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

// export function productExceptSelf(nums: number[]): number[] {
//   const prefix: number[] = [];
//   const postfix: number[] = [];

//   for (let i = 0, pre = 1; i < nums.length; i++) {
//     pre *= nums[i];
//     prefix[i] = pre;
//   }

//   for (let i = nums.length - 1, post = 1; i >= 0; i--) {
//     post *= nums[i];
//     postfix[i] = post;
//   }

//   console.log(prefix[0]);
//   console.log(postfix[2]);


//   return nums.map((_, i) => (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1))
// };

export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0, pre = 1; i < nums.length; i++) {
    pre *= nums[i];
    result[i] = pre;
  }
  for (let i = nums.length - 1, post = 1; i >= 0; i--) {
    result[i] = post * (result[i-1] ?? 1);
    post *= nums[i];
  }

  return result;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));