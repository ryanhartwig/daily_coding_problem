import tree from "./2023-01-13 largest_bst"
import { Tree, Node } from "../TreeNode"

(() => {

  /* 

  Given a binary tree of integers, find the maximum path sum between two nodes. 
  The path must go through at least one node, and does not need to go through the root.
  
  */

  const findMaxSum = (t: Tree<number>) => {
    let max_path = 0;

    const dfs = (n: Node<number> | null = t.root, working_max: number = 0) => {
      if (!n) return max_path = Math.max(max_path, working_max);

      dfs(n.left, working_max + n.value);
      dfs(n.right, working_max + n.value);
    }

    dfs();
    return max_path;
  }
  

  console.log(findMaxSum(tree));

})()

