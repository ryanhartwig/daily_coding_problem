
/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Dropbox.

Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits. The objective is to fill the grid with the constraint that every row, column, and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.

Implement an efficient sudoku solver.



https://www.puzzles-to-print.com/printable-sudokus/PDFs/easy-sudoku-01.pdf

pseudo:

every missing cell will have possibility array filled with numbers 1-9
  this array will be filtered / reduced by currently existing numbers in it's corresponding row, column, and cell

*/


/*
find row: Math.floor(i / 9)
find col: i % 9

find block:
  x: Math.floor(col / 3)
  y: Math.floor(row / 3)
*/

const sudoku: number[] = [ 
  
  0, 8, 9,   0, 0, 5,   1, 4, 0,
  3, 0, 0,   8, 1, 7,   0, 0, 6,
  7, 1, 0,   6, 0, 4,   3, 8, 0,

  0, 4, 3,   9, 0, 0,   0, 0, 0,
  9, 7, 0,   0, 0, 0,   0, 1, 4,
  0, 0, 0,   0, 0, 8,   7, 3, 0,

  0, 9, 6,   4, 0, 2,   0, 7, 1,
  4, 0, 0,   1, 5, 9,   0, 0, 2,
  0, 2, 1,   7, 0, 0,   4, 9, 0,

];

const solve = (sudoku: number[]):any[] => {
  let cloned: any = [...sudoku];

  const divs = new Map<string, number[]>();
  const unsolvedIndexes = new Set<number>();

  // Apply to corresponding set
  sudoku.forEach((n, i) => {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const blc = `${Math.floor(col / 3)}${Math.floor(row / 3)}`;

    if (n) {
      divs.get(`r${row}`)?.push(n) || divs.set(`r${row}`, [n]);
      divs.get(`c${col}`)?.push(n) || divs.set(`c${col}`, [n]);
      divs.get(`b${blc}`)?.push(n) || divs.set(`b${blc}`, [n]);
    }
  })

  const mapcb = (n: number, i: number) => {
    if (n !== 0) return n;
    unsolvedIndexes.add(i);
    
    const row = Math.floor(i / 9);
    const col = i % 9;
    const blc = `${Math.floor(col / 3)}${Math.floor(row / 3)}`;

    const comparisons = new Set<number>();

    divs.get(`r${row}`)?.forEach((n: number) => comparisons.add(n));
    divs.get(`c${col}`)?.forEach((n: number) => comparisons.add(n));
    divs.get(`b${blc}`)?.forEach((n: number) => comparisons.add(n));

    const possibleValues = [1,2,3,4,5,6,7,8,9].filter(num => !comparisons.has(num))

    let num: number = 0;
    if (possibleValues.length === 1) {
      num = possibleValues[0];
      divs.get(`r${row}`)?.push(num);
      divs.get(`c${col}`)?.push(num);
      divs.get(`b${blc}`)?.push(num);
      unsolvedIndexes.delete(i);
    }

    return num;
  }

  cloned = cloned.map(mapcb);

  while(unsolvedIndexes.size) {
    unsolvedIndexes.forEach((x, i: number) => {
      cloned[i] = mapcb(0, i);
    })
  }

  return cloned;
}


const result = solve(sudoku);
const expected = [];

const stringres = result.map((n: any, i: any) => (i % 9 === 8) && i !== 0 ? `${n}\n` : n).join(' ');
console.log('\nSOLUTION:\n\n ' + stringres)
