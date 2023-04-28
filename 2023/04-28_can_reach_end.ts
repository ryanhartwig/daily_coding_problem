/* 

You are given an array of nonnegative integers. Let's say you start at the beginning of the array and are trying to advance to the end. You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

For example, given the array [1, 3, 1, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return true.

Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.

*/

// Original (mine)
;(() => {

  const canTraverse = (arr: number[]) => {
    const traverse = (current: number = 0) => {
      if (current >= arr.length) return true;

      let startValue = arr[current];

      while (startValue > 0) {
        const reachedEnd = traverse(current + startValue);

        if (reachedEnd) {
          return true;
        }
        startValue--;
      }

      return false;
    }

    return traverse();
  }

  console.log(canTraverse([1, 3, 1, 2, 0, 1])); // true
  console.log(canTraverse([1, 2, 1, 0, 0])); // false
  
})();


// Optimization (GPT)
;(() => {

  const canTraverse = (arr: number[]) => {
    let furthestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (furthestIndex < i) return false;
      furthestIndex = Math.max(furthestIndex, i + arr[i]);
    }
    return true;
  }

  console.log(canTraverse([1, 3, 1, 2, 0, 1])); // true
  console.log(canTraverse([1, 2, 1, 0, 0])); // false
  
})();