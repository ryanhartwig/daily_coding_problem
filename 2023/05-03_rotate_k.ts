/* 
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.

*/

(() => {

  const rotate = (arr: any[], k: number) => {
    arr.reverse();
    arr.splice(0, k, ...arr.slice(0, k).reverse());
    arr.splice(k, arr.length - k, ...arr.slice(k, arr.length).reverse());
    return arr;
  }
  
  console.log(rotate([1,2,3], 2));
  
})()