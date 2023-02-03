import { DirectedGraph, Vertex } from '../Graph';

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

In a directed graph, each node is assigned an uppercase letter. We define a path's value as the number of most frequently-occurring letter along that path. For example, if a path in the graph goes through "ABACA", the value of the path is 3, since there are 3 occurrences of 'A' on the path.

Given a graph with n nodes and m directed edges, return the largest value path of the graph. If the largest value is infinite, then return null.

The graph is represented with a string and an edge list. The i-th character represents the uppercase letter of the i-th node. Each tuple in the edge list (i, j) means there is a directed edge from the i-th node to the j-th node. Self-edges are possible, as well as multi-edges.

For example, the following input graph:

ABACA
[(0, 1),
 (0, 2),
 (2, 3),
 (3, 4)]
Would have maximum value 3 using the path of vertices [0, 2, 3, 4], (A, A, C, A).

The following input graph:

A
[(0, 0)]
Should return null, since we have an infinite loop.

*/

const graph_path = () => {
  const find_path_value = (str: string, edges: [number, number][]) => {
    const occurences = new Map<string, number>();
    let max = 0;
    let infinite = false;

    const graph = new DirectedGraph;
    const vertices: Vertex[] = str.split('')
      .map(s => {
        const vertex = new Vertex(s);
        graph.addVertex(vertex);
        return vertex;
    });
    edges.forEach(([v1, v2]) => graph.addEdge(vertices[v1], vertices[v2]))
    
    const dft = (vertex: Vertex, traversed?: Set<string>) => {
      // Initial traversal set
      const traversedIds = new Set<string>([vertex.id])

      if (traversed) {
        if (traversed.has(vertex.id)) {
          infinite = true;
          return;
        }
        traversed.add(vertex.id);
      }

      const num = (occurences.get(vertex.name) ?? 0) + 1;
      occurences.set(vertex.name, num);
      if (max < num) max = num;

      vertex.edges.forEach(v => dft(v, traversed ? traversed : traversedIds));
    }
    dft(vertices[0]);

    return infinite ? null : max;
  }




  
  const str = 'ABACA';
  const edges: [number,number][] = [
    [0, 1],
    [0, 2],
    [2, 3],
    [3, 4],
  ]

  const resA = find_path_value(str, edges);
  console.assert(resA === 3, `received ${resA}`)

  const resB = find_path_value('A', [[0, 0]]);
  console.assert(resB === null, `received ${resB}`)
}

graph_path();