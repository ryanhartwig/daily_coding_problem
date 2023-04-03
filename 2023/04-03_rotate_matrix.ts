/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given an N by N matrix, rotate it by 90 degrees clockwise.

For example, given the following matrix:

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
you should return:

[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
Follow-up: What if you couldn't use any extra space?

x  y
0, 0 | i, i
2, 0 | n-1, i
2, 2 | n-1, n-1
0, 2 | i, n-1
0, 0 | i, i

if (i++) n-- 

eg. 
[[7, 4, 1, 4],
 [8, 5, 2, 4],
 [8, 5, 2, 8],
 [9, 6, 3, 8]]

x  y
0, 0 | i, i
3, 0 | n-1, i
3, 3 | n-1, n-1
0, 3 | i, n-1
0, 0 | i, i

x  y
1, 0 | x, y
3, 1 | n-1, x
2, 3 | n-1-x, n-1
0, 2 | y, n-1-x
1, 0 | x, y

*/

(() => {

  const rotateMatrix = (m: number[][]) => {
    const n = m[0].length;

    for (let y = 0; y < Math.floor(n/2); y++) {
      for (let x = 0; x < n - 1; x++) {
        // per above spec, x & y reversed (for array matrix)
        [
          m[x][n-1],
          m[n-1][n-1-x],
          m[n-1-x][y],
          m[y][x],
        ] = [ 
          m[y][x],
          m[x][n-1],
          m[n-1][n-1-x],
          m[n-1-x][y],
        ]
      }
    }

    return m;
  }

  console.log(rotateMatrix(
  [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]]
  ));
  
})()