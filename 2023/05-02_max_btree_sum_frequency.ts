import { Tree, Node } from '../data-structures/TreeNode';

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node is the sum of all values under a node, including the node itself.

For example, given the following tree:

  5
 / \
2  -5
Return 2 as it occurs twice: once as the left leaf, and once as the sum of 2 + 5 - 5.


working sum, passes back up through recursion
added to current function stack and sum totals

for each node in dfs
{ 
  sum of current subtree equal
    sum of left subtree 
     + sum of right subtree
  
  add sum of current to some array or map tracking sums / frequencies
}

*/

(() => {

  const mostFrequentSum = (t: Tree<number>) => {

    const sumFrequencies = new Map<number, number>();

    const dfs = (n: Node<number>) => {
      const current = n.value;
      let leftSum = 0;
      let rightSum = 0;

      if (n.left) {
        leftSum = dfs(n.left);
      }
      if (n.right) {
        rightSum = dfs(n.right);
      }

      const total = current + leftSum + rightSum;
      sumFrequencies.set(total, (sumFrequencies.get(total) ?? 0) + 1);

      return total;
    } 
    
    dfs(t.root);
    
    let maxSumFrequency = 0;
    let maxSumValue = 0;

    sumFrequencies.forEach((freq, val) => {
      if (freq > maxSumFrequency) {
        maxSumFrequency = freq;
        maxSumValue = val;
      }
    });
    return maxSumValue;
  }

  const tree = new Tree<number>(new Node(5));
  tree.root.left = new Node(2);
  tree.root.right = new Node(-5);

  console.log(mostFrequentSum(tree)); // 2
  
})()