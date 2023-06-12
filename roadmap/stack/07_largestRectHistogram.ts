/* 

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:

Input: heights = [2,4]
Output: 4
 
Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104

*/

export function largestRectangleArea(heights: number[]): number {
  const stack: [number, number][] = []; // [height, startIndex]
  let max = 0;
  let currentIndex = 0;

  const getAreas = () => {
    const [height, startIndex] = stack.pop()!;
    max = Math.max(max, height * (currentIndex - startIndex));
    return startIndex;
  }

  while (currentIndex < heights.length) { 
    const currentHeight = heights[currentIndex];
    const [lastHeight] = stack[stack.length - 1] ?? [0];
    
    if (lastHeight < currentHeight) stack.push([currentHeight, currentIndex]);

    // Trim the stack down to the current height
    let lastPoppedIndex: number | null = null; 
    while(stack.length && stack[stack.length - 1][0] > currentHeight) {
      lastPoppedIndex = getAreas();
    }
    if (lastPoppedIndex !== null) stack.push([currentHeight, lastPoppedIndex]);
    currentIndex++;
  }

  while (stack.length) getAreas();

  return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));