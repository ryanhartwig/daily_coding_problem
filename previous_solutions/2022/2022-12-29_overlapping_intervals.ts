(() => {

  /* 
  Good morning! Here's your coding interview problem for today.

  This problem was asked by Snapchat.

  Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

  The input list is not necessarily ordered in any way.

  For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].


  case 1: a value within the current interval (from input arr) is within the range of an existing new interval
    --> extend the existing interval

  case 2: both values of the current interval are outside of all existing intervals
    --> create a new interval
  

  */


  const merge = (intervals: number[][]) => {
    const merged: number[][] = [];

    intervals.forEach(([a, b], i) => {
      if (i === 0) {
        merged.push([a, b]);
        return;
      }

      let c = a, d = b;
      const ind = merged.findIndex(([e, f]) => {
        if ((a > e && a < f) 
          || (b > e && b < f)
          || (e > a && e < b)
          || (f > a && f < b)) {
          c = e;
          d = f;
          return true;
        }
      });

      merged[ind === -1 ? merged.length : ind] = [
        Math.min(a,b,c,d), 
        Math.max(a,b,c,d)
      ];
    })

    return merged;
  }

  let intervals = [
    [1, 3],
    [5, 8],
    [4, 10],
    [20, 25]
  ]
  
  const resA = JSON.stringify(merge(intervals));
  const expectedResA = JSON.stringify([
    [1, 3],
    [4, 10],
    [20, 25],
  ]);

  console.assert(resA === expectedResA, `received ${resA}`)



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})()