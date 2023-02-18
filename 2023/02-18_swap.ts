/* 


Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

*/

(() => {

  const swap = (arr: number[], k: number): number[] => {
    for (let i = 0; i < arr.length - k; i++) {
      const right = ((i + k) % arr.length);
      [arr[i], arr[right]] = [arr[right], arr[i]];
    }

    return arr;
  }

  console.log(swap([1,2,3,4,5,6], 2)); // [3, 4, 5, 6, 1, 2]
  
  
})()