(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Pinterest.

  Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

  For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.

  */

  const hoppable = (arr: number[]) => {
    const hop = (i: number = 0): any => {
      let skipby = arr[i];

      if (i + skipby >= arr.length || (skipby === 0 && i < arr.length - 1)) {
        return false;
      } else if (i + skipby === arr.length - 1) {
        return true;
      } else return hop(i + skipby);
    }


    return hop();
  }
  
  console.log(hoppable([2, 0, 1, 0])) // true
  console.log(hoppable([1, 1, 0, 1])) // false
  console.log(hoppable([3, 0, 0, 7, 1, 1, 1, 1, 1, 3, 3, 1, 1])) // false
})()