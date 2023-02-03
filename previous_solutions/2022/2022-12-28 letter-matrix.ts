/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:

cba
daf
ghi
This is not ordered because of the a in the center. We can remove the second column to make it ordered:

ca
df
gi
So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:

abcdef
Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:

zyx
wvu
tsr
Your function should return 3, since we would need to remove all the columns to order it.

*/

(() => {
  const order = (arr: string[][]) => {
    return arr.filter(sub => {
      let valid = true;
      sub.sort((b, a) => {
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
          valid = false;
        }

        return 0;
      })
      return !valid;
    }).length;
  }
  
  const resA = order([
    ['c', 'd', 'g'],
    ['b', 'a', 'h'],
    ['a', 'f', 'i'],
  ])
  const resB = order([
    ['z', 'w', 't'],
    ['y', 'v', 's'],
    ['x', 'u', 'r'],
  ])
  const resC = order([
    ['a'], ['b'], ['c'], ['d'], ['e'], ['f'],
  ])
  
  console.assert(resA === 1, `received: ${resA}`);
  console.assert(resB === 3, `received: ${resB}`);
  console.assert(resC === 0, `received: ${resC}`);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})()

