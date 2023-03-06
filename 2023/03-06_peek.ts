/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given an iterator with methods next() and hasNext(), create a wrapper iterator, PeekableInterface, which also implements peek(). peek shows the next element that would be returned on next().

Here is the interface:

class PeekableInterface(object):
    def __init__(self, iterator):
        pass

    def peek(self):
        pass

    def next(self):
        pass

    def hasNext(self):
        pass

*/



(() => {
  interface Iterator<T> {
    arr: T[],
    index: number,
  }

  class Iterator<T> {
    constructor(arr: T[]) {
      this.arr = arr;
      this.index = 0;
    }

    next() {
      return this.arr[this.index++] ?? null;
    }

    hasNext() {
      return this.index < this.arr.length;
    }
  }

  class PeekableInterface<T> extends Iterator<T> {
    constructor(arr: T[]) {
      super(arr);
    }

    peek() {
      return this.arr[this.index];
    }
  }
  

  const pi = new PeekableInterface([1,2,3,4,5]);

  console.log(pi.peek());
  console.log(pi.next());
  console.log(pi.peek());
  console.log(pi.hasNext());
  
})()