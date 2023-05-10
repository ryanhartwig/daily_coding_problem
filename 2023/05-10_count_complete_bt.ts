import { Tree, Node } from '../data-structures/TreeNode';
/* 

Given a complete binary tree, count the number of nodes in faster than O(n) time. Recall that a complete binary tree has every level filled except the last, and the nodes in the last level are filled starting from the left.

        1
    2          3
4     5    5     


traverse down left to find max depth of tree
traverse down right, storing traversed nodes, to determine if depth is equal
if not:
  find last node on the max depth from right to left, using stored nodes if needed

final count is 2^depth - missing nodes from right to left on last depth level


*/

(() => {


  const countCompleteTree = (t: Tree<number>) => {
    const findDepth = (n: Node<number> = t.root, depth = 0): number => {
      return n.left
        ? findDepth(n.left, ++depth)
        : depth;
    }
    const depth = findDepth();

    let missing = 0;
    const findLast = (n: Node<number> = t.root, currentDepth = 0): boolean => {
      if (currentDepth < depth - 1) {
        const foundRight = n.right !== null && findLast(n.right, currentDepth + 1);
        if (foundRight) return true;

        const foundLeft = n.left !== null && findLast(n.left, currentDepth + 1);
        return foundLeft;
      } else {
        if (n.right) return true;
        else missing++;

        if (n.left) return true;
        else missing++;

        return false;
      }
    }

    findLast();

    return Math.pow(2, depth + 1) - 1 - missing;
  }

  const ctree = new Tree<number>(new Node(0));
  ctree.root.left = new Node(1);
  ctree.root.right = new Node(2);
  ctree.root.left.left = new Node(3);
  ctree.root.left.right = new Node(4);
  ctree.root.right.left = new Node(5);

  console.log(countCompleteTree(ctree));
  
})()