(() => {

  /* 

  You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

  Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

  0 <= j <= nums[i] and
  i + j < n
  Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].


  Example 2:

  Input: nums = [2,3,0,1,4]
  Output: 2

  Example 1:

  Input: nums = [2,3,1,1,4]
  Output: 2
  Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
  

  

  optimal jump value = length - 1 - i
  min length tracked

  * conditions *
  if (optimal jump value is current val)
    then only add path to last index
  
  if (current path's length >= min length) 
    move to next index without adding path values

  [
 0   [],        // 2
 1   [[2]],     // 3
 2   [[2]],     // 1
 3   [[2, 1]],  // 1
 4   [[2, 3]],  // 4
  ]
  
  */
  
  function jump(nums: number[]): number {

    const minSteps: number[] = Array(nums.length).fill(Infinity);
    minSteps[0] = 0;

    for (let i = 0; i < nums.length; i++) {
      const currentSteps = minSteps[i];

      for (let j = 1; j <= nums[i]; j++) {
        if (i + j >= nums.length) break;

        minSteps[i + j] = Math.min(minSteps[i + j], currentSteps + 1);
      }
    }
    
    return minSteps[nums.length - 1];
  };


  console.log(jump([4, 0, 0, 0, 0])); // 1
  console.log(jump([2,3,1,1,4])); // 2
  console.log(jump([2,3,0,1,4])); // 2  
  console.log(jump([2, 1]));
  

  
})()