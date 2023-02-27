/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

init(arr, size): initialize with the original large array and size.
set(i, val): updates index at i with val.
get(i): gets the value at index i.

*/

(() => {
  interface SparseArray {
    map: Map<number, number>,
    size: number,
  }

  class SparseArray {
    constructor() {
      this.size = 0;
      this.map = new Map<number, number>();
    }

    init(arr: number[], size: number) {
      arr.forEach((el, i) => {
        if (el !== 0) {
          this.map.set(i, el);
        }
      });
      this.size = size;
    }

    set(i: number, val: number) {
      this.map.set(i, val);
    }

    get(i: number) {
      const result = this.map.get(i);

      if (result === undefined && i < this.size && i >= 0) {
        return 0;
      }
      return result;
    }
  }

  const sa = new SparseArray();

  sa.init([1,0,3,0,0,0,0,8], 8);

  sa.set(0, 5);

  console.log(sa.get(0));
  console.log(sa.get(1));
  console.log(sa.get(2));
  
})()