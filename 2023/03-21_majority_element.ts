/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by MongoDB.

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)).

You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1. 
  * this input array is invalid based on the spec of the question *

*/

(() => {

  const majorityElement = (arr: number[]) => {
    const frequency: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const freq = frequency[current] ?? 0;

      if (freq + 1 > Math.floor(arr.length / 2)) {
        return current;
      }

      frequency[current] = freq + 1;
    }
  }

  console.log(majorityElement([1,2,1,1,3,4,1])); // 1
  console.log(majorityElement([0, 0, 1])); // 0
  
})()