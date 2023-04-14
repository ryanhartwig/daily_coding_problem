import { Tree, Node } from "../data-structures/TreeNode"

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the sequence of keys visited by a postorder traversal of a binary search tree, reconstruct the tree.

For example, given the sequence 2, 4, 3, 8, 7, 5, you should construct the following tree:

    5
   / \
  3   7
 / \   \
2   4   8

pseudo:
iterate through list in reverse order
- first value is root of the tree
- track last root, making sure that each value is > than current root
  - this will allow propagation upwards as necessary
- check value > or < current root
  - if >, apply as right child and vice versa
  - after applying, recurse with the new child as the temporary root
    - if the next value is less than the temporary root, function chain should stop, and value should be applied to left child of the correct root node
*/

(() => {

  const construct = (list: number[]) => {
    const tree = new Tree<number>(new Node(list[list.length-1]));
    const nodeStack: Node<number>[] = [tree.root];

    for (let i = list.length - 2; i >= 0; i--) {
      const node = new Node(list[i]);
      const lastRoot = nodeStack[nodeStack.length - 1]!

      if (node.value > lastRoot.value) {
        lastRoot.right = node;
        nodeStack.push(node);
        continue;
      }

      if (node.value < lastRoot.value) {
        let lastValidRoot = nodeStack.pop()!;
        let prevRoot = nodeStack[nodeStack.length - 1];

        while (prevRoot && prevRoot.value > node.value) {
          lastValidRoot = nodeStack.pop()!;
          prevRoot = nodeStack[nodeStack.length - 1];
        }

        lastValidRoot.left = node;
        nodeStack.push(node);
        continue;
      }
    }
    return tree;

  }

  const tree = construct([2,4,3,8,7,5]);
  console.log(tree.root)
  
})()