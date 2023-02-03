/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.


*/

const perfect_number = () => {
  const perfect = (n: number) => {
    const diff = 10 - [...n.toString().split('')]
      .map(n => Number(n))
      .reduce((a, b) => a + b)
    ;
    return Number(`${n}${diff}`);
  }

  const resA = perfect(1);
  const resB = perfect(2);
  const resC = perfect(111);

  console.assert(resA === 19, `received ${resA}`);
  console.assert(resB === 28, `received ${resB}`);
  console.assert(resC === 1117, `received ${resC}`);
}


perfect_number();