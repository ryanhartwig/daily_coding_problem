/* 



*/

(() => {

  const expectedFlips = (n: number) => {
    let current = n;
    let count = 0;

    while (current > 1) {
      count++;
      current = Math.round(current / 2);
    }

    return count;
  }

  console.log(expectedFlips(26426442))
  
})()