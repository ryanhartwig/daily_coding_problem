/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
//

[0]



(curr, val=null)

curr.data = 0;

let leftIsUnival = true;
let rightIsUnival = true;


if (left) {
  leftIsUnival = recurse(left, current.data)
}

if (right) {
  rightIsUnival = recurse(right, current.data)
}

if (leftIsUnival && rightIsUnival) inc++;
if (val !== null) return current.data === val;




any child of a node, which has no children, will be a unival tree
  -aka each leaf adds +1 to the count

any time we have found a unival tree, we return the current data
bfs
queue 
and some method to keep track of potential unival trees




*/

interface Tree {
  root: TreeNode | null,
}

interface TreeNode {
  data: number,
  left: TreeNode | null,
  right: TreeNode | null,
}


class Tree {
  constructor() {
    this.root = null;
  }

  // Find univals count
  countUnivals(node: TreeNode) {
    let count = 0;

    const traverse = (curr: TreeNode, val?: number) => {
      let leftIsUnival = true;
      let rightIsUnival = true;

      if (curr.left) {
        leftIsUnival = traverse(curr.left, curr.data)
      }

      if (curr.right) {
        rightIsUnival = traverse(curr.right, curr.data)
      }

      if (leftIsUnival && rightIsUnival) count++;
      return curr.data === val;
    }

    traverse(node);
    return count;
  }

  setRoot(node: TreeNode) {
    this.root = node;
  }
}

class TreeNode {
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeft(node: TreeNode) {
    this.left = node;
  }

  setRight(node: TreeNode) {
    this.right = node;
  }
}

const tree = new Tree();
const root = new TreeNode(0);
const a = new TreeNode(1);
const b = new TreeNode(0);
const c = new TreeNode(1);
const d = new TreeNode(0);
const e = new TreeNode(1);
const f = new TreeNode(1);

tree.setRoot(root);
root.setLeft(a);
root.setRight(b);
b.setLeft(c);
b.setRight(d);
c.setLeft(e);
c.setRight(f);

const univals = tree.countUnivals(root);
console.assert(univals === 5, `Assertion failed! Expected: 5 | Received: ${univals}`);

console.log(tree.countUnivals(root));
