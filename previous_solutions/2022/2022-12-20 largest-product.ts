/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.

[0, 0, 0, 0, 0]

*/

const largestProduct = () => {
  let max = 0;

  const findLargest = (arr: number[]) => {
    arr.forEach((n1, i) => {
      arr.slice(i + 1).forEach((n2, i2) => {
        arr.slice(i + 2 + i2).forEach((n3) => {
          if (isNaN(n1) || isNaN(n2) || isNaN(n3)) return;
          const product = n1 * n2 * n3;
          if (product > max) max = product;
          console.log(`${n1} x ${n2} x ${n3} = ${product}`)
        })
      })
    });

    return max;
  }


  // const resA = findLargest([-10, -10, 5, 2]);

  // console.assert(resA === 500, `received ${resA}`);
  console.log(findLargest([31,58,-2,-9,-128,0,8,35]))  





}



largestProduct();
