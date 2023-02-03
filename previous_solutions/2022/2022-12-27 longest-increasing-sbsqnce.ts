/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.


ex: 

[0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]

=> 6

[4, 3, 2, 1] => 1
[3, 7, 2, 9, 12] => 4
[12, 2, 8, 4, 5, 13] => 4

*/

(() => {
  const findLongest = (arr: number[]) => {
    const subs: number[][] = [];

    arr.forEach(n => {
      subs.push([n]);

      subs.forEach(sub => {
        if (sub[sub.length - 1] < n) subs.push([...sub, n]);
      })

    })

    let max = 0;
    subs.forEach(sub => {
      if (sub.length > max) {
        max = sub.length;
      }
    })

    return max;
  }
  

  const input = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
  const resA = findLongest(input);
  const resB = findLongest([12, 2, 8, 4, 5, 13]);

  console.assert(resA === 6, `received ${resA}`)
  console.assert(resB === 4, `received ${resB}`)




  // Geeksforgeeks dynamic programming solution 
  // https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/

  function lis(arr: number[], n: number) {
    let lis = Array(n).fill(0);
    let i: number, j: number, max = 0;

    // Initialize LIS values for all indexes
    for(i = 0; i < n; i++)
        lis[i] = 1;

    // Compute optimized LIS values in
    // bottom up manner
    for(i = 1; i < n; i++)  {
        for(j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                console.log(lis);
                console.log(arr);

                console.log(`arr[${i}]`, arr[i])
                console.log(`arr[${j}]`, arr[j])
                console.log(`lis[${i}]`, lis[i])
                console.log(`lis[${j}]`, lis[j])

                lis[i] = lis[j] + 1;

            }}}

    // Pick maximum of all LIS values
    for(i = 0; i < n; i++)
        if (max < lis[i])
            max = lis[i];

    return max;
  }

  const resC = lis(input, input.length);
  const resD = lis([12, 2, 8, 4, 5, 13], 6);

  console.assert(resC === 6, `received ${resC}`)
  console.assert(resD === 4, `received ${resD}`)

})()
