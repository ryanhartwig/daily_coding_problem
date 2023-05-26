export function productExceptSelf(nums: number[]): number[] {
  let zeroIndex: number | undefined = undefined;
  let multipleZeros = false;

  const max = nums.reduce((prev, curr, i) => {
    if (curr === 0) {
      if (zeroIndex !== undefined) multipleZeros = true;
      zeroIndex = i;
      return prev;
    }    

    return prev * curr;
  }, 1);

  return nums.map((n, i) => {
    if (multipleZeros) return 0;
    if (zeroIndex !== undefined) return i === zeroIndex ? max : 0;
    return max / n;
  });
};

console.log(productExceptSelf([1,2,3]));
console.log(productExceptSelf([1,2,3,0]));