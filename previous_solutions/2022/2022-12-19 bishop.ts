/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

For example, given M = 5 and the list of bishops:

(0, 0)
(1, 2)
(2, 2)
(4, 0)

The board would look like this:


[b 0 0 0 0]
[0 0 b 0 0]
[0 0 b 0 0]
[0 0 0 0 0]
[b 0 0 0 0]



You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4. 

for each bishop
  set ox and oy coordinates from current bishop
  for all next elements
    compare x and y to ox and oy to determine diagonal matches
 */


const bishops = (bishops: [number, number][]) => {
  // const map = new Map<string, Set<string>>()

  let count = 0;

  bishops.forEach((bishop, i, arr) => {
    const [ox, oy] = bishop;
    const comp = arr.slice(i + 1);

    comp.forEach((b) => {
      const [x, y] = b;
      const diff = x - ox;
      if (oy + diff === y || oy - diff === y) count++;
    })
  })

  return count;
}

/* 
[b 0 0 0 0]
[0 0 b 0 0]
[0 0 b 0 0]
[0 0 0 0 0]
[b 0 0 0 0]
*/
const a: [number, number][] = [
  [0, 0],
  [1, 2],
  [2, 2],
  [4, 0],
]

/* 
[b 0 0 0 b]
[0 b 0 b 0]
[0 0 b 0 0]
[0 0 0 b 0]
[0 0 0 0 b]
*/
const b: [number, number][] = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [3, 1],
  [4, 0],
]

const resultA = bishops(a);
const resultB = bishops(b);

console.assert(resultA === 2, `received: ${resultA}`)
console.assert(resultB === 2, `received: ${resultB}`)

console.log(resultA);
console.log(resultB);