/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Goldman Sachs.

Given a list of numbers L, implement a method sum(i, j) which returns the sum from the sublist L[i:j] (including i, excluding j).

For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]), which is 5.

You can assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.


psuedo:

in class constructor, initiate a new map with the key being the index and value being the compound sum up to that index in the array

sum(i, j) 
  pull the latter argument (j) index - 1 (compound sum) 
  subtract the former argument (i) index
  return the result



*/

;(() => {

  interface OptimizedSum {
    map: Map<number, number>,
  }
  
  class OptimizedSum {
    constructor(list: number[]) {
      const map = new Map<number, number>();

      list.forEach((n, i) => {
        const prev = map.get(i - 1) ?? 0;
        map.set(i, n + prev);
      });

      this.map = map;
    }

    sum(i: number, j: number) {
      if (i >= j) {
        console.error('The second index must be greater than the first.');
        return null;
      }
      
      // Handle indices greater than array size
      const larger = this.map.get(Math.min(j-1, this.map.size - 1)) ?? 0; 
      const smaller = this.map.get(i - 1) ?? 0;

      return larger - smaller;
    }
  }

  const OptSum = new OptimizedSum([1,2,3,4,5]);
  console.log(OptSum.sum(2, 3)); // 5

})();