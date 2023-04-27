/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Stripe.

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.

(7, 9), (2, 6), (5, 8)

*/

(() => {
  const inRange = (range: [number, number], value: number) => 
    Math.min(...range) < value && Math.max(...range) > value;

  const minRemove = (intervals: [number, number][]) => {
    const overlappingMap = new Map<string, [number, number][]>();
    let count = 0;

    for (let i = 0; i < intervals.length; i++) {
      const [[a, b], ...rest] = intervals.slice(i);

      rest.forEach(([c, d]) => {
        if (inRange([a, b], c) || inRange([a, b], d)) {
          const abKey = `${a}-${b}`;
          const cdKey = `${c}-${d}`;

          overlappingMap.set(abKey, [...overlappingMap.get(abKey) || [], [c, d]]);
          overlappingMap.set(cdKey, [...overlappingMap.get(cdKey) || [], [a, b]]);
        }
      });
    }


    while (overlappingMap.size) {
      let maxEdges = 0;
      let maxKey = '';

      overlappingMap.forEach((edges, key) => {
        if (edges.length > maxEdges) {
          maxEdges = edges.length;
          maxKey = key;
        }
      });

      const edges = overlappingMap.get(maxKey)!;
      const [keyA, keyB] = maxKey.split('-').map(c => Number(c));

      edges.forEach(([c, d]) => {
        const bKey = `${c}-${d}`;

        overlappingMap.set(maxKey, overlappingMap.get(maxKey)!.filter(([e, f]) => c !== e && d !== f));
        overlappingMap.set(bKey, overlappingMap.get(bKey)!.filter(([e, f]) => keyA !== e && keyB !== f));
        if (!overlappingMap.get(bKey)?.length) {
          overlappingMap.delete(bKey);
        }
      });

      if (!overlappingMap.get(maxKey)?.length) {
        overlappingMap.delete(maxKey);
      }

      count++;
    }

    return count;
  }

  console.log(minRemove([[7, 9], [2, 6], [5, 8]])); // 1
  console.log(minRemove([[1,3], [2, 8], [6, 12], [11, 18]])); // 2
  
})()

