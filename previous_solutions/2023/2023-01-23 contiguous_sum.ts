(() => {

  /* 


  Good morning! Here's your coding interview problem for today.

  This problem was asked by Lyft.

  Given a list of integers and a number K, return which contiguous elements of the list sum to K.

  For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4], since 2 + 3 + 4 = 9.
  
  */
  
  let count = 0;
  const cont_sum = (input: number[], k: number) => {
    const sums = new Map<number, number[][]>();
    const kSums: number[][] = [];

    input.forEach((n, i, arr) => {
      let prev: number[][] = [];
      if (arr[i - 1] === n - 1) {
        prev = sums.get(n - 1) || [];
      }
      prev = prev.map(arr => {
        let newArr = [...arr, n];
        if (newArr.reduce((a, b) => a + b) === k) kSums.push(newArr);

        return newArr;
      })      

      sums.set(n, [...prev, [n]]);

    })

    return kSums[0];
  }

  console.log(cont_sum([1,2,3,4,5], 9)); // [2,3,4]
  console.log(count);
})()