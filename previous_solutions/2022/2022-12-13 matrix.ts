/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.

For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:

Right, then down
Down, then right
Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

*/


const matrix = ({x, y}: {x: number, y: number}): number => {
  let count = 0;


  const recurse = (currentX = 1, currentY = 1) => {

    // Right
    if (currentX < x) {
      recurse(currentX + 1, currentY);
    }

    // Down
    if (currentY < y) {
      recurse(currentX, currentY + 1);
    }

    if (currentX === x && currentY === y) return count++;
  }
  

  recurse();

  return count;
}

const matrix_resultA = matrix({x: 2, y: 2});
const matrix_resultB = matrix({x: 5, y: 5});

console.assert(matrix_resultA === 2, `received: ${matrix_resultA} | expecting 2`);
console.assert(matrix_resultB === 70, `received: ${matrix_resultB} | expecting 70`);
