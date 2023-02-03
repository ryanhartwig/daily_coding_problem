(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This question was asked by Google.

  Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).
  
  */
  
  const rand = (n: number, l: number[]) => {
    const nums = new Array(n + 1).fill(0).map((_, i) => i);
    const set = new Set(nums);

    l.forEach(num => set.delete(num));

    const validNums = Array.from(set);

    if (!validNums.length) return 0;
    return validNums[Math.floor(Math.random() * validNums.length)];
  }

  console.log(rand(12, [0, 2, 4, 6, 8, 10, 12]));
    
})()