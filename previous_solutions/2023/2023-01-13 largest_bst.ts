import { Node, Tree } from "../TreeNode"
const tree = new Tree<number>(new Node(10));
tree.root.left = new Node(5);
tree.root.right = new Node(15)

tree.root.left.left = new Node(3)
tree.root.left.right = new Node(6);

tree.root.left.left.left = new Node(1);
tree.root.left.left.right = new Node(4);
tree.root.left.right.left = new Node(5);
tree.root.left.right.right = new Node(8);

tree.root.right.left = new Node(12);
tree.root.right.right = new Node(19);

tree.root.right.left.left = new Node(11);
tree.root.right.left.right = new Node(13);
tree.root.right.right.left = new Node(18);
tree.root.right.right.right = new Node(24);

(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Apple.

  Given a tree, find the largest tree/subtree that is a BST.

  Given a tree, return the size of the largest tree/subtree that is a BST.
  
  */
  

  const findLargestBST = (t: Tree<number>) => {
    let largest = 1;
    let working = 1;

    const validBT = (n: Node<number>) => {
      return n.left && n.left.value < n.value && n.right && n.right.value > n.value;
    }

    const binaryTraverse = (node: Node<number>) => {
      if (!validBT(node)) return;

      working += 2;

      binaryTraverse(node.left!);
      binaryTraverse(node.right!)
    }

    const dfs = (node: Node<number> = t.root) => {
      if (validBT(node)) {
        binaryTraverse(node);
        if (working > largest) largest = working;
        working = 1;
      }

      node.left && dfs(node.left);
      node.right && dfs(node.right);
    }

    dfs();

    return largest;
  } 








  /* 

                   5
         8                    9
    2       11         5           11
  0   4   14   2    2     2     12    4 
  
  */


  


  // console.log(findLargestBST(tree)) // 15
  
})()


export default tree;