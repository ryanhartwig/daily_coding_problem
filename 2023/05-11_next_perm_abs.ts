/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by IBM.

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.

*/

;(() => {

  const nextPerm = (n: number) => {
    const nums = n.toString().split('').map(n => Number(n));

    for (let i = nums.length - 1; i > 0; i--) {
      const prev = nums[i - 1];
      const curr = nums[i];
      if (prev >= curr) continue;

      const sorted = nums.slice(i).sort((a, b) => a - b);
      let minGreater = Infinity;
      let minIndex = 0;

      const combined = [...nums.slice(0, i), ...sorted];

      sorted.forEach((n, ind) => {
        if (n > prev && n < minGreater) {
          minGreater = n;
          minIndex = ind + i;
        }
      });

      [combined[i - 1], combined[minIndex]] = [combined[minIndex], combined[i - 1]];
      return Number(combined.join(''));
    }

    return n;
  }

  console.log(nextPerm(48975));
  
})();
