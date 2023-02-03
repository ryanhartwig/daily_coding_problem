/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

*/

const array_matrix = (matrix: string[][], word: string): boolean => {

  const wordArray = word.split('');

  let rightInd = 0;
  let downInd = 0;
  
  return matrix.some((letters, y, mtrx) => {
    return letters.some((c, x) => {
      // Check right
      if (c === wordArray[rightInd]) {
        if (rightInd === wordArray.length - 1) {
          return true;
        }
        rightInd++;
      } else {
        rightInd = 0;
      }

      // Check down
      if (c === wordArray[downInd]) {
        for (let i = 1; i < wordArray.length; i++) {
          if (mtrx[y + i][x] === wordArray[i]) {
            if (i === wordArray.length - 1) {
              return true;
            } else {
              continue;
            }
          } else {
            downInd = 0;
            break;
          }
        }
      } 
    })
    
  });
}

const mtrx = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']];
const array_matrix_result = array_matrix(mtrx, 'FOAM');
// const array_matrix_resultB = array_matrix(mtrx, 'MASS');
// const array_matrix_resultC = array_matrix(mtrx, 'EFKD');


console.assert(array_matrix_result === true, 'Failed in FOAM');
// console.assert(array_matrix_resultB === true, 'Failed in MASS');
// console.assert(array_matrix_resultC === false, 'Failed in EFKD');
