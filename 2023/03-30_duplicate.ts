/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

*/

;(() => {

  const findDuplicate = (arr: number[]) => {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) {
        return [arr[i], i] // return the duplicate value, and the index position of the duplicate
      }
    }
  }

  console.log(findDuplicate([1,2,3,3])); // [3, 3]
  console.log(findDuplicate([1,2,3,4,4,5])); // [4, 4]
  
})()