/* 

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.


input

[
  [1, 2, 3],
  [2, 1, 4, 5],
  [4, 2],
  [5, 2, 3],
  [3, 1, 6],
  [6, 3]
]
=> false 
vis: 
    1
   /  \ 
  2    3
 / \ /  \ 
4   5     6  


[
  [1, 2, 3],
  [2, 1, 4],
  [4, 2],
  [3, 1, 5],
  [5, 3]
]
=> true
vis: 
    1
   / \ 
  2   3
   \   \
    4    5
// 


process array into map, where key = node and value = array of destinations

travel down each possible path
  if reaching the node you started on
    return false, since it is not minimally connected


*/

(() => {

  const minimallyConnected = (graph: number[][]) => {
    const graphMap = new Map<number, number[]>();

    graph.forEach(([node, ...edges]) => {
      graphMap.set(node, edges);
    });

    const dfs = (node: number, destinations: number[], visited: number[]): boolean => {
      if (visited.includes(node)) {
        return false;
      } else if (!destinations.length) return true;

      return destinations.every(dest => 
        dfs(
          dest, 
          graphMap.get(dest)!.filter(v => v !== node), 
          [...visited, node],
        )
      );
    }

    const starting = graph[0][0];
    const destinations = graphMap.get(starting)!;

    return destinations.every(node => 
      dfs(
        node, 
        graphMap.get(node)!.filter(v => v !== starting), 
        [starting],
      )
    );
    
  }
  
  console.log(minimallyConnected([
    [1, 2, 3],
    [2, 1, 4, 5],
    [4, 2],
    [5, 2, 3],
    [3, 1, 6],
    [6, 3]
  ]));

  console.log(minimallyConnected([
    [1, 2, 3],
    [2, 1, 4],
    [4, 2],
    [3, 1, 5],
    [5, 3]
  ]));

})()
