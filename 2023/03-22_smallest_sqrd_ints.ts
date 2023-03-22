/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4.

Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

*/

(() => {

  const smallestNumSquared = (n: number) => {
    const squared: number[] = [];
    let min = Infinity;

    for( let i = 1; i*i <= n; i++) {
      squared.unshift(i*i);
    }

    const recurse = (workingTotal: number = n, count: number = 0, arr = squared) => {
      if (count >= min) return;
      if (!workingTotal) min = Math.min(min, count);

      let lastInd = squared.findIndex(n => n <= workingTotal);

      recurse(workingTotal - squared[lastInd], count + 1);
    }

    squared.forEach((sqr, i) => recurse(n, 0, squared.slice(i)));

    return min;
  }

  console.log(smallestNumSquared(27));
  
})()