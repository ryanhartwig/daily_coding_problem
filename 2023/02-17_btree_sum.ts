import { Tree, Node } from "../data-structures/TreeNode";

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

For example, given the following tree and K of 20

*/
(() => {

  const findNodes = (t: Tree<number>, K: number): [Node<number>, Node<number>] | null => {
    const diffs = new Map<number, Node<number>>()

    const dfs = (n: Node<number> | null = t.root): [Node<number>, Node<number>] | null => {
      if (!n) return null;
      
      const diff = diffs.get(n.value);
      if (diff) {
        return [diff, n];
      }

      diffs.set(K - n.value, n);

      return dfs(n.left) || dfs(n.right);
    }

    return dfs();
  }

  const tree = new Tree<number>(new Node(10));
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);

  tree.root.right.left = new Node(11);
  tree.root.right.right = new Node(15);

  console.log(findNodes(tree, 21))
  console.log(findNodes(tree, 20))
  
})()
