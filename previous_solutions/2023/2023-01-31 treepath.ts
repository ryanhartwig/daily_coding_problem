import { Tree, Node } from '../TreeNode';

(() => {


  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Facebook.

  Given a binary tree, return all paths from the root to leaves.

  For example, given the tree:

    1
    / \
  2   3
      / \
    4   5
  Return [[1, 2], [1, 3, 4], [1, 3, 5]].
  
  */


  const paths = (t: Tree<number>) => {
    const paths: number[][] = [];

    const dfs = (n: Node<number> = t.root, curr: number[] = []) => {
      const clone = [...curr, n.value];

      if (!n.left && !n.right) return paths.push(clone);

      n.left && dfs(n.left, clone);
      n.right && dfs(n.right, clone);
    }

    dfs();
    return paths;
  }

  const tree = new Tree<number>(new Node(1));
  tree.root.left = new Node(2);
  tree.root.right = new Node(3);
  
  tree.root.right.left = new Node(4);
  tree.root.right.right = new Node(5);


  console.log(paths(tree));
  
})()