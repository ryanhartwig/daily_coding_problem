(() => {
  
  /* 


  Good morning! Here's your coding interview problem for today.

  This problem was asked by Uber.

  A rule looks like this:

  A NE B

  This means this means point A is located northeast of point B.

  A SW C

  means that point A is southwest of C.

  Given a list of rules, check if the sum of the rules validate. For example:

  A N B
  B NE C
  C N A
  does not validate, since A cannot be both north and south of C.

  A NW B
  A N B
  is considered valid.
  
  */
  
  
  const getDelta = (point: [number, number], dir: string): [number, number] => {
    const [x, y] = point;
    let [dX, dY] = [x, y]

    dir.split('').forEach(d => {
      switch(d) {
        case 'N':
          dY--;
          break;
        case 'S':
          dY++;
          break;
        case 'E':
          dX--;
          break;
        case 'W':
          dX++;
          break;
      }
    })

    return [dX, dY];
  }
  
  const validate = (points: string[]) => {
    const map = new Map<string, [number, number]>();
    
    return points.every(p => {
      const [p1, dir, p2] = p.split('-');

      let p1xy = map.get(p1) || [0, 0];
      if (!map.has(p1)) map.set(p1, p1xy);

      const delta = getDelta(p1xy, dir);

      const p2xy = map.get(p2);
      if (!p2xy) {
        map.set(p2, [Number(delta[0]), Number(delta[1])]);
        return true;
      }

      const dirs: string[] = [dir];
      const validDeltas: [number, number][] = [];
      if (dir.length > 1) {
        dir.split('').forEach(d => dirs.push(d));
      }
      dirs.forEach(d => validDeltas.push(getDelta(p1xy, d)));

      return validDeltas.some(([x, y]) => x === p2xy[0] && y === p2xy[1]);
    });
  }
  
  
  console.log(validate([
    'A-N-B',
    'B-NE-C',
    'C-N-A',
  ]))
  
  
  
})()