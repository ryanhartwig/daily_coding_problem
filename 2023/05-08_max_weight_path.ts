/* 

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

  1
 2 3
1 5 1
We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.


for traversing every possibility:

current index 
searches index of current and current + 1, of next number array
updates a maximum value

*/

(() => {

  const maxWeight = (numbers: number[][]) => {
    let max = 0;
    const cache = new Map<string, number>();

    const recurse = (index: number, treeIndex: number, workingSum = 0) => { 
      const existing = cache.get(`${treeIndex}-${index}`);
      if (existing !== undefined) {
        max = Math.max(workingSum + existing);
        return existing;
      }
      
      const currentValue = numbers[treeIndex][index];
      if (currentValue === undefined) return workingSum;

      const currentSum = workingSum + currentValue;

      if (numbers.length - 1 === treeIndex) {
        max = Math.max(currentSum, max);
        return currentSum;
      }

      const leftResult = recurse(index, treeIndex + 1, currentSum);
      const rightResult = recurse(index + 1, treeIndex + 1, currentSum);

      const maxSum = Math.max(leftResult, rightResult);
      cache.set(`${treeIndex}-${index}`, maxSum - workingSum);

      return maxSum;
    }

    recurse(0, 0);
    return max;
  }

  console.log(maxWeight([[1],[2,3],[1,5,1]]));
  
})()