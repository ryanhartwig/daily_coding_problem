const clockwise = (matrix: number[][]) => {
  let ymin = 0;
  let ymax = matrix.length - 1;
  let xmin = 0;
  let xmax = matrix[0].length - 1;
  
  while (xmin < xmax && ymin < ymax) {
    // right
    for (let i = xmin; i <= xmax; i++) {
      console.log(matrix[ymin][i]);
    }
    ymin++;

    // down
    for (let i = ymin; i <= ymax; i++) {
      console.log(matrix[i][xmax]);
    }
    xmax--;

    // left
    for (let i = xmax; i >= xmin; i--) {
      console.log(matrix[ymax][i]);
    }
    ymax--;

    // up
    for (let i = ymax; i >= ymin; i--) {
      console.log(matrix[i][xmin]);
    }
    xmin++;
  }
}


const clk_mtrx = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

clockwise(clk_mtrx);




/* 

matrix[ymax].reverse().forEach((n, i) => {
    if (i <= xmin) return;
    if (i > xmax + 1) return;
    console.log(n);
  })

*/