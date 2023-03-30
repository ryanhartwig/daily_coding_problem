/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

*/

;(() => {

  const findDuplicate = (arr: number[]) => {

    const values = new Set<number>();

    for (const number of arr) {
      if (values.has(number)) return number;
      
      values.add(number);
    }
  }

  console.log(findDuplicate([1,2,3,3])); // 3
  console.log(findDuplicate([1,2,3,4,4,5])); // 4
  
})()