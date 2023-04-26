/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You are given given a list of rectangles represented by min and max x- and y-coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.

For example, given the following rectangles:

{
    "top_left": (2, 4),
    "dimensions": (3, 3) # width, height
},
{
    "top_left": (-1, 3),
    "dimensions": (2, 1)
},
{
    "top_left": (0, 5),
    "dimensions": (4, 3)
}
return true as the first and third rectangle overlap each other.

*/

(() => {

  interface Rect {
    topLeft: [number, number],
    bottomRight: [number, number],
  }

  const inRange = (range: [number, number], value: number) => 
    Math.min(...range) < value 
    && Math.max(...range) > value
  ;

  const overlapping = (rects: Rect[]) => {

    return rects.some(({topLeft: [x1min, y1min], bottomRight: [x1max, y1max]}, i) => {
      return rects.some(({topLeft: [x2min, y2min], bottomRight: [x2max, y2max]}, ind) => {
        if (ind === i) return false;
        return ((inRange([x1min, x1max], x2min) || inRange([x1min, x1max], x2max))
            && (inRange([y1min, y1max], y2min) || inRange([y1min, y1max], y2max)))
         || (x1min === x2min && y1min === y2min && x1max == x2max && y2max === y1max)
      })
    })

  }
  
  console.log(overlapping([
    {
      topLeft: [2, 4],
      bottomRight: [4, 2]
    },
    {
      topLeft: [1, 3],
      bottomRight: [3, 1]
    }
  ]));
  
})()