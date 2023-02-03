/* 

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?


Reduce original array using multiplication
for each element in array, 
  divide the product of the reduce array by the current element
  push division to new array

return the new array

time complexity O(n + n)
space complexity O(1)
*/

const findProductOfOtherIntegers = (array) => {
  const product = array.reduce((a, b) => a * b);
  return array.map((el) => product / el);
}

console.log(findProductOfOtherIntegers([1, 2, 3, 4, 5]));
console.log(findProductOfOtherIntegers([3, 2, 1]));

/* no division approach

brute force solution:

for each element in array
  find product of each element in the array other than current parent element
  push product to new array

time complexity: O(n*2);
space complexity: O(n^2);
*/


const findProductNoDivision = (array) => {
  return array.map((el, i, arr) => {
    let elements = [];
    arr.forEach((el, ind) => {
      if (ind !== i) {
        elements.push(el);
      }
    });
    return elements.reduce((a, b) => a * b);
  })
}

console.log(findProductNoDivision([1, 2, 3, 4, 5]));
