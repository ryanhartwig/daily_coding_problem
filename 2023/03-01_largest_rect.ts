/* 

Good morning! Here's your coding interview problem for today.

This question was asked by Google.

Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

[[1, 0, 0, 0],
 [1, 0, 1, 1],
 [1, 0, 1, 1],
 [0, 1, 0, 0]]
Return 4.

`*/

(() => {


  const largestRect = (m: number[][]) => {
    let largest = 0;

    const findBounds = (x: number, y: number) => {
      let largestWorking = 0;
      
      const xMin = x;
      let xMax = Infinity;
      const yMin = y;
      let yMax = Infinity;

      for (let y1 = y; y1 < m.length; y1++) {
        if (m[y1][x] === 0) {
          yMax = y1;
          break;
        }
        
        for (let x1 = x; x1 < m[0].length; x1++) {
          if (m[y1][x1] === 0) {
            xMax = Math.min(xMax, x1);
            break;
          }
        }
        xMax = Math.min(xMax, m[0].length);
        largestWorking = Math.max((xMax-xMin) * (y1-yMin + 1), largestWorking); //inclusive y 
      }
      yMax = Math.min(yMax, m.length);
      return Math.max((xMax-xMin) * (yMax-yMin), largestWorking);
    }

    for (let y = 0; y < m.length; y++) {
      for (let x = 0; x < m[0].length; x++) {
        const current = m[y][x];

        if (current === 1) {
          largest = Math.max(largest, findBounds(x, y));
        }
      }
    }

    return largest;
  }

  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [0, 1, 0, 0]
  ];

  const result = largestRect(matrix); // 4
  console.assert(result === 4, `Expected 4 but received ${result}.`); 
})()