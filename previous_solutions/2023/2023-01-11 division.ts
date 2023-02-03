(() => {
  /* 

  Good morning! Here's your coding interview problem for today.

  This question was asked by ContextLogic.

  Implement division of two positive integers without using the division, multiplication, or modulus operators. Return the quotient as an integer, ignoring the remainder.

  */


  const divide = (n: number, m: number) => {
    let quotient = 0;
    for (; n >= m && m !== 0; quotient++) n -= m;
    return quotient;
  }

  console.log(divide(12, 1))

})()