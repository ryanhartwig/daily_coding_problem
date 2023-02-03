

(() => {

  /* 

  Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. Assume that each node in the tree also has a pointer to its parent.
  
  */

  interface Node<T> {
    value: T,
    left: Node<T> | null,
    right: Node<T> | null,
    parent: Node<T> | null,
  }
  
  interface Tree<T> {
    root: Node<T>,
  }
  
  
  class Node<T> {
    constructor(value: T, parent: Node<T> | null = null, left: Node<T> | null = null, right: Node<T> | null = null) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.parent = parent;
    }
  }
  
  class Tree<T> {
    constructor(root: Node<T>) {
      this.root = root;
    }
  }
  

  // Original
  const lca = (t: Tree<string>, v: Node<string>, w: Node<string>) => {
    const vNodes: Node<string>[] = [];
    const wNodes: Node<string>[] = [];

    let working: Node<string> | null = v;
    while (working) {
      vNodes.unshift(working);
      working = working.parent;
    }
    working = w;
    while (working) {
      wNodes.unshift(working);
      working = working.parent;
    }

    let lastEquality: Node<string> | null = null;
    for (let i = 0; i < vNodes.length; i++) {
      if (vNodes[i] === wNodes[i]) lastEquality = vNodes[i];
      else break;
    }

    return lastEquality;
  }


  // Optimized
  const lcaOh = (t: Tree<string>, v: Node<string>, w: Node<string>) => {
    let nodes = new Set<Node<string>>();

    let working: Node<string> | null = v;
    while (working) {
      nodes.add(working);
      working = working.parent;
    }
    working = w;
    while (working) {
      if (nodes.has(working)) return working;
      working = working.parent;
    }

    return null;
  }

  const a = new Node('a');

  const b = new Node('b', a);
  const c = new Node('c', a);

  const d = new Node('d', b);
  const e = new Node('e', b);

  const f = new Node('f', e);
  

  a.left = b;
  a.right = c;

  b.left = d;
  b.right = e;

  e.right = f;

  const tree = new Tree<string>(a);
  // console.log(lca(tree, d, f)?.value)

  console.log(lcaOh(tree, d, f)?.value)
})()