/* 

You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

For example, in this matrix

0 3 1 1
2 0 0 4
1 5 3 1
The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.

*/

(() => {

  const collectMax = (m: number[][]) => {
    let max = 0;
    
    const search = (x: number = 0, y: number = 0, current: number = 0) => {
      let working = current + m[y][x];

      if (x === m[0].length - 1 && y === m.length - 1) {
        max = Math.max(working, max);
        return;
      }

      if (x < m[0].length - 1) {
        search(x + 1, y, working);
      }
      if (y < m.length - 1) {
        search(x, y + 1, working);
      }
    }

    search();

    return max;
  }

  const matrix = [
    [0, 3, 1, 1],
    [2, 0, 0, 4],
    [1, 5, 3, 1],
  ];

  console.log(collectMax(matrix)); // 12

  
})();