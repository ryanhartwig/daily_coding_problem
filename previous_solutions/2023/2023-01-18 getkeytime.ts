(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Stripe.

  Write a map implementation with a get function that lets you retrieve the value of a key at a particular time.

  It should contain the following methods:

  set(key, value, time): sets key to value for t = time.
  get(key, time): gets the key at t = time.
  The map should work like this. If we set a key at a particular time, it will maintain that value forever or until it gets set at a later time. In other words, when we get a key at a time, it should return the value that was set for that key set at the most recent time.

  Consider the following examples:

  d.set(1, 1, 0) # set key 1 to value 1 at time 0
  d.set(1, 2, 2) # set key 1 to value 2 at time 2
  d.get(1, 1) # get key 1 at time 1 should be 1
  d.get(1, 3) # get key 1 at time 3 should be 2

  d.set(1, 1, 5) # set key 1 to value 1 at time 5
  d.get(1, 0) # get key 1 at time 0 should be null
  d.get(1, 10) # get key 1 at time 10 should be 1

  d.set(1, 1, 0) # set key 1 to value 1 at time 0
  d.set(1, 2, 0) # set key 1 to value 2 at time 0
  d.get(1, 0) # get key 1 at time 0 should be 2


  use map to store key value pairs,  where:
    -key is the key input
    -value is an array of values added, where time will be represented by the position (index) of an element in an array
      -therefore replacements will be possible when provided the same key and time


  */

  interface KVTMap<T> {
    map: Map<string, T[]>,
  }
  
  class KVTMap<T> {
    constructor() {
      this.map = new Map<string, T[]>()
    }

    get(key: string, time: number) {
      const array = this.map.get(key);
      if (!array) return null;

      const possible = array.slice(0, time + 1);
      return possible.reverse().find(t => t ?? false) ?? null;
    }

    set(key: string, value: T, time: number) {
      const array = this.map.get(key) || [];
      array[time] = value;
      this.map.set(key, array);
    }
  }
  
  const d = new KVTMap<number>();

  d.set('1', 1, 0);
  d.set('1', 2, 2);

  console.log(d.get('1', 1)); // 1
  console.log(d.get('1', 3)); // 2

  const e = new KVTMap<number>();

  e.set('1', 1, 5);
  console.log(e.get('1', 0)); // null
  console.log(e.get('1', 10)); // 1

  const f = new KVTMap<number>();

  f.set('1', 1, 0);
  f.set('1', 2, 0);
  console.log(f.get('1', 0)); // 2
  
})()