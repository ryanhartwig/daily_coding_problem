/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given n numbers, find the greatest common denominator between them.

For example, given the numbers [42, 56, 14], return 14.

[14, 42, 56]

*/

(() => {

  const greatestCommonDenom = (nums: number[]) => {
    let greatest: null | number = null;

    nums.forEach(n => {
      if (nums.every(num => num % n === 0)) {
        if (greatest === null || greatest < n) greatest = n;
      }      
    });

    return greatest;
  }

  console.log(greatestCommonDenom([42,56,14])); // 14
  
  
})()