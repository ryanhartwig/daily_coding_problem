(() => {
  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Amazon.

  Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

  For example, this matrix has 4 islands.

  1 0 0 0 0
  0 0 1 1 0
  0 1 1 0 0
  0 0 0 0 0
  1 1 0 0 1
  1 1 0 0 1
    
  */

  interface Coord {
    x: number,
    y: number,
  }

  const islands = (coords: Coord[], sizeX: number, sizeY: number) => {
    let count = 0;

    const unvisited = new Set<string>(coords.map(c => `${c.x}-${c.y}`));

    const circle = ({x, y}: Coord) => {
      const neighbors: Coord[] = [];

      unvisited.delete(`${x}-${y}`)

      // Find neighbor coordinates
      for (let x1 = x - 1; x1 <= x + 1; x1++) {
        for (let y1 = y - 1; y1 <= y + 1; y1++) {
          neighbors.push({ x: x1, y: y1 });
        }
      }

      // Filter out 0s / invalids
      const oneNeighbors = neighbors.filter(({x, y}) => unvisited.has(`${x}-${y}`));

      oneNeighbors.forEach(({x, y}) => circle({x, y}));
    }

    while (unvisited.size) {
      const [x, y] = Array.from(unvisited)[0].split('-').map(n => Number(n));
      circle({x, y})
      count++;
    }

    circle({ x: 0, y: 0});
    
    return count;
  }
  
  const resA = islands([
    {x: 0, y: 0},
    {x: 2, y: 1},
    {x: 3, y: 1},
    {x: 1, y: 2},
    {x: 2, y: 2},
    {x: 0, y: 4},
    {x: 1, y: 4},
    {x: 4, y: 4},
    {x: 0, y: 5},
    {x: 1, y: 5},
    {x: 4, y: 5},
  ], 5, 6)
  
  console.assert(resA === 4, `received: ${resA}`);

})()