/* 

Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.


Example 1:

Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.
Example 2:

Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
 

Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1

*/
(() => {

  const maxDistance = (grid: number[][]): number => {
    let count = -1;
    const n = grid.length;
  
    const water = new Set<string>(); // 0s
    const land = new Set<string>(); // 1s

    let queue: number[][] = [];

    grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          land.add(`${x}-${y}`);
          queue.push([x, y]);
        }
        else water.add(`${x}-${y}`);
      })
    });

    if (!water.size || !land.size) return -1;

    while(queue.length) {
      const clone = [...queue];
      queue = [];
      count++;

      clone.forEach(([x, y]) => {
        const validWaterNeighbors = [
          [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1],
        ].filter(([x, y]) => {
          if ( x >= 0 && x < n && y >= 0 && y < n // within grid bounds 
          && grid[y][x] === 0 ) { // is water
            return grid[y][x] = 1;
          };
        });
        queue.push(...validWaterNeighbors);
      })
    }
  
    return count;
  }
  
  console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]));
  console.log(maxDistance([[1,0,0],[0,0,0],[0,0,0]]));
  
})()




/* 

const maxDistance = (grid: number[][]): number => {
  let maxDistance = 0;

  const water = new Set<string>(); // 0s
  const land = new Set<string>(); // 1s

  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) land.add(`${x}-${y}`);
      else water.add(`${x}-${y}`);
    })
  });

  if (!water.size || !land.size) return -1;

  water.forEach(cell => {
    const [x1, y1] = cell.split('-').map(n => Number(n));
    let currentMax = Infinity;

    land.forEach(land => {
      const [x2, y2] = land.split('-').map(n => Number(n));

      currentMax = Math.min(currentMax, Math.abs(x1 - x2) + Math.abs(y1 - y2));
    });

    maxDistance = Math.max(currentMax, maxDistance);
  });

  return maxDistance;
}

*/