(() => {
  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Microsoft.

  Given a number in the form of a list of digits, return all possible permutations.

  For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].

  */

  const permutate = (nums: number[]): number[][] => {
    let permutations: number[][] = []

    const refac = (arr: number[], working: number[]) => {
      arr.forEach((n, i, ref) => {
        const rest = [...ref.slice(0, i), ...ref.slice(i + 1)];

        if (!rest.length) {
          permutations.push([...working, n]);
        } else {
          refac(rest, [...working, n]);
        }
      })
    }
    
    refac(nums, []);
    return permutations;
  }

  console.log(permutate([1,2,3]));
  
})()