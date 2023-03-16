/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by LinkedIn.

Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].



*/

;(() => {
  const closest = (points: [number, number][], point: [number, number], k: number) => {
    return points.sort((a, b) => {
      const [x1, y1] = a;
      const [x2, y2] = b;

      const diffSumA = Math.abs(x1 - point[0]) + Math.abs(y1 - point[1]);
      const diffSumB = Math.abs(x2 - point[0]) + Math.abs(y2 - point[1]);

      return diffSumA - diffSumB;
    }).slice(0, k);
  }

  console.log(closest([[0, 0], [5, 4], [3, 1]], [1, 2], 2));
})();