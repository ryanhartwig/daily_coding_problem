/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5
You should return 45, as it is (3 + 2) * (4 + 5).


if left is number
  if right is number
    perform operation
  else 
    recurse on right's children
else
  recurse on left's children


*/

import { Tree, Node } from "./TreeNode";
type operation = '*' | '+' | '/' | '-';


const nodeC1 = new Node<operation | number>(3);
const nodeC2 = new Node<operation | number>(2);
const nodeC3 = new Node<operation | number>(4);
const nodeC4 = new Node<operation | number>(5);

const nodeB1 = new Node<operation | number>('+', nodeC1, nodeC2);
const nodeB2 = new Node<operation | number>('+', nodeC3, nodeC4);
const nodeA1 = new Node<operation | number>('*', nodeB1, nodeB2);

const ArithmeticTree = new Tree<operation | number>(nodeA1);

const evaluate = (node: Node<operation | number>): number => {
  const left = typeof node.left?.value === 'number' ? node.left.value : evaluate(node.left!);
  const right = typeof node.right?.value === 'number' ? node.right.value : evaluate(node.right!);
  return eval(`${left}${node.value}${right}`);
}

const actual = evaluate(ArithmeticTree.root);
console.assert(actual === 45, `returned value: ${actual}, expected: 45`)
console.log(actual);