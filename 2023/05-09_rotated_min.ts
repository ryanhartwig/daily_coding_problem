/* 

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

For example, given [5, 7, 10, 3, 4], return 3.

*/

(() => {

  const findMin = (arr: number[]): number => {
    const mid = Math.floor(arr.length / 2);
    
    // Handles edge case where mid and 0 index are equal
    if (arr.length === 2) {
      return Math.min(arr[0], arr[1]);
    }
    
    if (arr[0] < arr[mid]) {
      // Handles case where array or subarray is now sorted
      if (arr[0] < arr[arr.length - 1]) return arr[0];

      const unsorted = arr.slice(mid + 1);
      if (unsorted.length === 1) return unsorted[0];
      return findMin(unsorted);
    } else {
      const unsorted = arr.slice(0, mid);
      if (unsorted.length === 1) return unsorted[0];
      return findMin(unsorted);
    }
  }

  console.log(findMin([4, 1, 2, 3])); // 1
  console.log(findMin([5, 7, 10, 3, 4])); // 3
  
})()