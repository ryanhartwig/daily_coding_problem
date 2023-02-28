/* 

Good morning! Here's your coding interview problem for today.

This question was asked by Apple.

Given a binary tree, find a minimum path sum from root to a leaf.

For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

*/

import { Tree, Node } from '../data-structures/TreeNode';

(() => {

  const minPathSum = (t: Tree<number>) => {
    let minSum = Infinity;

    const dfs = (n: Node<number> = t.root, working: number = 0) => {
      const current = working + n.value;
      
      if (!n.left && !n.right) {
        return minSum = Math.min(minSum, current);
      }

      if (n.left) {
        dfs(n.left, current);
      }
      if (n.right) { 
        dfs(n.right, current);
      }
    }

    dfs();

    return minSum;
  }

  const tree = new Tree<number>(new Node(10));
  tree.root.left = new Node(5);
  tree.root.left.right = new Node(2);

  tree.root.right = new Node(5);
  tree.root.right.right = new Node(1);
  tree.root.right.right.left = new Node(-1);

  console.log(minPathSum(tree)); //15
  
})()