import { Node, Tree } from "../TreeNode"

(() => {

  /*

  Good morning! Here's your coding interview problem for today.

  This problem was asked by LinkedIn.

  Determine whether a tree is a valid binary search tree.

  A binary search tree is a tree with two children, left and right, and satisfies the constraint that the key in the left child must be less than or equal to the root and the key in the right child must be greater than or equal to the root.

  */

  const validate = (tree: Tree<number>): boolean => {
    const dfs = (n: Node<number>): boolean => {
      let leftValid = n.left
        ? n.left.value <= n.value 
        : true;
      let rightValid = n.right
        ? n.right.value >= n.value
        : true;

      if (!leftValid || !rightValid) return false;
      
      if (n.left) {
        leftValid = dfs(n.left);
      }
      if (n.right) {
        rightValid = dfs(n.right);
      }

      return leftValid && rightValid;
    }
    
    return dfs(tree.root);
  }
  
  
  const tree = new Tree<number>(new Node<number>(5));
  tree.root.left = new Node(3);
  tree.root.left.left  = new Node(2);
  tree.root.left.right = new Node(4);

  tree.root.right = new Node(8);
  tree.root.right.left = new Node(6);
  tree.root.right.right = new Node(4); //invalid
  
  console.log(validate(tree)); // false
})()