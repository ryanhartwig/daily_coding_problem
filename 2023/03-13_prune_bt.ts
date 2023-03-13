import { Tree, Node } from '../data-structures/TreeNode';

/* 

Good morning! Here's your coding interview problem for today.

This question was asked by BufferBox.

Given a binary tree where all nodes are either 0 or 1, prune the tree so that subtrees containing all 0s are removed.

For example, given the following tree:

   0
  / \
 1   0
    / \
   1   0
  / \
 0   0
should be pruned to:

   0
  / \
 1   0
    /
   1
We do not remove the tree at the root or its left child because it still has a 1 as a descendant.

recursion function accepts current node , and last 1 (or null)
  store arg var as let

  if current node value is 1
    arg var = current node
  
  if no children
    return arg var

  else 
    if left 
      left result = recurse with left & arg var
      if left result equals arg vart
        assign left to null
    if right 
      right result = same with right
      if right result equals arg var
        assign right to null

  return arg var
  
  
  
*/

(() => {

  const prune = (t: Tree<number>) => {
  const dfsPrune = (n: Node<number>, last: Node<number> | null): Node<number> | null => {
    let lastOne = last;

    if (n.value === 1) {
      lastOne = n;
    }

    if ((!n.left) && (!n.right)) {
      return lastOne;
    }

    let leftResult: Node<number> | null | undefined = undefined;
    let rightResult: Node<number> | null | undefined = undefined;

    if (n.left) {
      leftResult = dfsPrune(n.left, lastOne);
      if (leftResult === lastOne) {
        n.left = null;
      }
    } 
    if (n.right) {
      rightResult = dfsPrune(n.right, lastOne);
      if (rightResult === lastOne) {
        n.right = null;
      }
    }

    return leftResult !== undefined && leftResult !== lastOne 
      ? leftResult
      : rightResult !== undefined && rightResult !== lastOne
        ? rightResult
        : lastOne;
  }

  const result = dfsPrune(t.root, null);
  return result === null ? null : t;
}
  
  const tree = new Tree<number>(new Node(0));
  tree.root.left = new Node(1);
  tree.root.right = new Node(0);
  
  tree.root.right.right = new Node(0);
  tree.root.right.left = new Node(1);

  tree.root.right.left.left = new Node(0);
  tree.root.right.left.right = new Node(0);

  const res = prune(tree);

  console.log(res);
  console.log(res?.root?.right)

  
})()