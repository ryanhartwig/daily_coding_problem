(() => {

  /**
   * Good morning! Here's your coding interview problem for today.

    This problem was asked by Facebook.

    Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.

  */


  const getBinary = (n: number) => {
    const bin = n.toString(2).split('');

    while (bin.length < 32) {
      bin.unshift('0');
    }

    return bin;
  }

  const getNum = (b: string) => {
    return parseInt(b, 2);
  }
    
  const convert = (x: number, y: number, b: number) => {
    const binX = getBinary(x);
    const binY = getBinary(y);
    const binB = getBinary(b);
    
    // (solution)
    // return (x & b) | (y & ~b);.
    //          0          
    // x = 0
    // b = 1
    // y = 1


    
    return getNum(
      binB.map((b, i) => {
        return b === '1'
          ? binX[i]
          : binY[i]
      }).join('')
    )
  }


  console.log(convert(5, 12, 1345));
})()

console.log((0 & 1) | (1 & ~1));