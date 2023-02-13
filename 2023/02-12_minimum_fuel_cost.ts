import { DirectedGraph, Vertex } from "../data-structures/Graph";

/* 
There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of n cities numbered from 0 to n - 1 and exactly n - 1 roads. The capital city is city 0. You are given a 2D integer array roads where roads[i] = [ai, bi] denotes that there exists a bidirectional road connecting cities ai and bi.

There is a meeting for the representatives of each city. The meeting is in the capital city.

There is a car in each city. You are given an integer seats that indicates the number of seats in each car.

A representative can use the car in their city to travel or change the car and ride with another representative. The cost of traveling between two cities is one liter of fuel.

Return the minimum number of liters of fuel to reach the capital city.


*/

(() => {

  const graph = new DirectedGraph();

  const capital = new Vertex('0');
  const a = new Vertex('1');
  const b = new Vertex('2');
  const c = new Vertex('3');
  const d = new Vertex('4');
  const e = new Vertex('5');
  const f = new Vertex('6');

  graph.addVertices([capital, a, b, c, d, e, f]);

  graph.addEdge(b, c);
  graph.addEdge(c, a);
  graph.addEdge(a, capital);
  
  graph.addEdge(e, capital);

  graph.addEdge(f, d);
  graph.addEdge(d, capital);

  graph.addEdge(c, b);
  graph.addEdge(a, c);
  graph.addEdge(capital, a);

  graph.addEdge(capital, e);

  graph.addEdge(d, f);
  graph.addEdge(capital, d);

  const minimumFuelCost = (graph: DirectedGraph, capitalVertex: Vertex, seats: number) => {
    let totalCost = 0;
    const representatives = new Set<Vertex>();
    const leaves: Set<Vertex> = new Set();

    graph.vertices.forEach(v => representatives.add(v));
    representatives.delete(capitalVertex);


    const findLeaves = (v: Vertex = capitalVertex, visited: Set<string> = new Set()) => {
      const _visited = new Set(visited);

      _visited.add(v.name);

      const unvisited = v.edges.filter(vert => !visited.has(vert.name));

      if (!unvisited.length) leaves.add(v);
      else unvisited.forEach(vert => findLeaves(vert, _visited));
    }
    findLeaves();

    if (!leaves.size) return totalCost;

    const toCapital = (v: Vertex, visited: Set<string> = new Set(), currentCost: number = 0, passengers: number = 0) => {
      const _visited = new Set(visited);
      let currentPassengers = passengers;
      _visited.add(v.name);

      if (v.name === '0') {
        totalCost += currentCost;
        return;
      }
      
      if (representatives.has(v) && passengers < seats) {
        representatives.delete(v);
        currentPassengers++;
      } else if (representatives.has(v)) {
        leaves.add(v);
      }

      const parent = v.edges[0]!;

      toCapital(parent, _visited, currentCost + 1, currentPassengers);
    }
    
    while(leaves.size) {
      const current = Array.from(leaves)[0]!;
      toCapital(current);

      leaves.delete(current);
    }

    return totalCost;
  }

  console.log(minimumFuelCost(graph, capital, 2));
  
})()