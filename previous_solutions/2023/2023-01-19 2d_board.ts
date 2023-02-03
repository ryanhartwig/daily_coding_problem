import { getCoordsFromArray, getIndexFromCoords } from "../getCoordsFromArray";

(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Coursera.

  Given a 2D board of characters and a word, find if the word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

  For example, given the following board:

  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ]
  exists(board, "ABCCED") returns true, exists(board, "SEE") returns true, exists(board, "ABCB") returns false.
  
  */

  const getNeighbourCoords = (x: number, y: number) => ([
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ])
  
  const exists = (board: string[][], seq: string) => {

    const starting: [number, number][] = [];

    board.forEach((row, y) => {
      row.forEach((c, x) => {
        if (c === seq[0]) starting.push([x, y]);
      })
    })

    const recurse = (x: number, y: number, working: string[] = seq.split('').slice(1), visited: Set<string> = new Set()): boolean => {
      if (!working.length) return true;
      visited.add(`${x}-${y}`);

      const neighbours = getNeighbourCoords(x, y).filter(([x, y]) => !visited.has(`${x}-${y}`) && board[y] && board[y][x] === working[0]);

      if (!neighbours.length) return false;
      else return neighbours.some(([x, y]) => recurse(x, y, working.slice(1), new Set(visited)));
    }

    if (!starting.length) return false;
    return starting.some(([x, y]) => recurse(x, y));
  }

  const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E'],
  ];

  console.log(exists(board, 'BCESEECFDASA')) // true
  console.log(exists(board, 'FBCCSE')) // true
  console.log(exists(board, 'FBF')) // false

})()

