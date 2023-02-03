
import { v4 as uuidv4 } from 'uuid';

export interface Vertex {
  name: string,
  edges: Vertex[],
  id: string,
}

export interface DirectedGraph {
  vertices: Vertex[],
  size: number,
}

export class Vertex {
  constructor(name: string) {
    this.name = name;
    this.edges = [];
    this.id = uuidv4();
  }

  addEdge(v: Vertex) {
    this.edges.push(v);
  }
}

export class DirectedGraph { 
  constructor() {
    this.vertices = [],
    this.size = 0;
  }

  addVertex(v: Vertex) {
    this.vertices.push(v);
    this.size++;
  }

  addEdge(v1: Vertex, v2: Vertex) {
    v1.addEdge(v2);
  }
}

