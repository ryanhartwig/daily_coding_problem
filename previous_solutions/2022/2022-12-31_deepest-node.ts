import { Tree, Node } from "../TreeNode"

(() => {
  /* 
  
  Good morning! Here's your coding interview problem for today.

  This problem was asked by Google.

  Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

      a
    / \
    b   c
  /
  d

  bfs, using queue to track the nodes

  bfs
    return last existing node in queue
  
  */
  
  const deepest = <T,>(tree: Tree<T>) => {
    const queue = [tree.root];

    const bfs = (): Node<T> => {
      const node = queue.shift() as Node<T>;

      if (node.left) {
        queue.push(node.left);
      } if (node.right) {
        queue.push(node.right);
      }

      if (queue.length) {
        return bfs();
      } 

      return node;
    }

    const a = bfs();
    return a;
  }
  
  
  const tree = new Tree<string>(new Node<string>('a'));
  
  const b = new Node<string>('b');
  const c = new Node<string>('c');

  const d = new Node<string>('d');

  tree.root.left = b;
  tree.root.right = c;
  b.left = d;

  const resA = deepest<string>(tree);
  console.assert(resA?.value === 'd', `received ${resA.value}`);
  
})()