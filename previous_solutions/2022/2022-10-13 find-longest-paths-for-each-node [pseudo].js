/*

Given a directed graph with n nodes labeled from 0 to n-1. Find the length of a longest path from all the nodes.

example:

[
(0,1),
(1,2),
(2,3),
(4,3)
]

0->1->2->3<-4

Output: [3,2,1,0,1]

*/

// next ;

// vertices arg: 
/* 
[ {
  data: 0,
  next: 1
}, {
  data: 1,
  next: 2
}, {
  data: 2,
  next: 3
}, {
  data: 3,
  next: null
}, {
  data: 4,
  next: 3
} ]
*/

const findLongestPaths = (edges, vertices) => {
  const paths = [];

  const dft = (node, distance) => { // recursive
    if (!node.next) {
      return distance;
    }
    distance++;

    
    dft(node.next, distance); // in real implementation, would need to find the next node in the vertices array and pass that as an object
  }

  vertices.forEach((node) => {
    paths.push(dft(node, 0)) // result
  })


  return paths;
}