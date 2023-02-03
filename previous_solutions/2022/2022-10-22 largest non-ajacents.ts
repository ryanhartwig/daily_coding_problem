




/* 
Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?


[5, 1, 1, 5]
=> 10

first 5
second 1

arr = [1, 5]

first += 0 // 5
recurse [1, 5], 5

first 1
second 5

first += 5 //6
recurse []6

!arr.length
  6 > 0, so sum = 6;

second += 5 //11
recurse [], 11

!arr.length && 11 > 6
  sum == 11

[1, 1, 5, 1, 5]
=> 11

[2, 4, 6, 2, 5]
=> 13

[5, 9, 6, 9, 5, 1]
=> 19


pick 0 or 1th index
recurse with next valid array, sending current sum

if next valid array is empty
  check current sum against last valid sum
  update if necessary



*/


const findLargestNA = (originalArray: number[]): number => {
  let sum = 0;

  const recurse = (curr: number[], runningSum: number) => {
    let arr = [...curr];
    // base case
    if (!arr.length) {
      if (runningSum > sum) {
        sum = runningSum;
      }
      console.log(`returning ${runningSum}, global sum: ${sum}`)
      return;
    }    

    let first = arr.shift();
    let second = arr.shift();
    
    // first index
    if (first !== undefined) {
      first += runningSum;
      recurse(arr, first);
    }

    // second index
    if (second !== undefined) {
      second += runningSum;
      recurse(arr.slice(1), second);
    }
  }

  recurse(originalArray, 0);

  return sum;
}


const test1res = findLargestNA([5, 1, 1, 5]);
const test2res = findLargestNA([2, 4, 6, 2, 5]);
const test3res = findLargestNA([1, 1, 5, 1, 5]);
const test4res = findLargestNA([5, 9, 6, 9, 5, 1]);

console.assert(test1res === 10, `Assertion failed. Expected ${test1res} to be 10. You're a dissapointment.`);
console.assert(test2res === 13, `Assertion failed, expected ${test2res} to be 13. Try harder.`);

console.assert(test3res === 11, `Assertion failed. Expected ${test1res} to be 11. You're a dissapointment.`);
console.assert(test4res === 19, `Assertion failed, expected ${test2res} to be 19. Try harder.`);