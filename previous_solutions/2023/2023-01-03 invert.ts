import { Node, Tree } from "../TreeNode"

(() => {

  /* 
  
  Good morning! Here's your coding interview problem for today.

  This problem was asked by Google.

  Invert a binary tree.

  For example, given the following tree:

       a
      / \
      b   c
    / \  /
    d   e f
  should become:

     a
    / \
    c  b
    \  / \
      f e  d
  
  */

  const invert = <T,>(t: Tree<T>) => {
    const invertedTree = new Tree<T>(new Node<T>(t.root.value));

    const dfs = (n: Node<T>, parentNode: Node<T>) => {
      if (n.left) {
        parentNode.right = new Node<T>(n.left.value);
        dfs(n.left, parentNode.right);
      }

      if (n.right) {
        parentNode.left = new Node<T>(n.right.value);
        dfs(n.right, parentNode.left);
      }
    }

    dfs(t.root, invertedTree.root);

    return invertedTree;
  }

  const tree = new Tree<string>(new Node<string>('a'));

  const b = new Node<string>('b');
  const c = new Node<string>('c');
  const d = new Node<string>('d');
  const e = new Node<string>('e');
  const f = new Node<string>('f');

  b.left = d;
  b.right = e;
  c.left = f;
  tree.root.left = b;
  tree.root.right = c;

  const inverted = invert<string>(tree);

  console.log(inverted);
})()