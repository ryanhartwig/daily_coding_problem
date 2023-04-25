/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

*/


(() => {
  
  const longestDistinct = (arr: number[]) => {
    const window = new Set<number>();
    let left = 0;
    let right = 0;
    let maxLength = 0;

    const leftForward = () => {
      window.delete(arr[left++]);
      rightForward();
    }

    const rightForward = () => {
      if (window.has(arr[right])) {
        return leftForward();
      }
      window.add(arr[right++]);
      maxLength = Math.max(right - left, maxLength);

      if (right === arr.length) return;
      rightForward();
    }

    rightForward();

    return maxLength;
  }

  console.log(longestDistinct([5,1,3,5,2,3,4,1])) // 5
})()