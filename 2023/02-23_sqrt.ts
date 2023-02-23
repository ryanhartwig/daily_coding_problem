/* 

Good morning! Here's your coding interview problem for today.

Given a real number n, find the square root of n. For example, given n = 9, return 3.

*/

(() => {

  // Naive? solution?

  const sqrt = (n: number) => Math.sqrt(n);
  

  console.log(sqrt(9));


  // No sqrt function (whole sqrts only)

  const findSqrt = (n: number) => {
    if (n === 0) return n;
    if (n < 0) return null;
    
    for (let i = Math.ceil(n / 2); i > 0 ; i--) {
      if (i * i == n) return i;
    }
    return null;
  }
  
  console.log(findSqrt(9));
})()