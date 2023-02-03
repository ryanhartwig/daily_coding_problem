import { Tree, Node } from "../TreeNode"

(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Microsoft.

  Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.
  
  */

  const printLevels = (t: Tree<number>) => {
    const nodeQueue: Node<number>[] = [t.root];

    const bfs = () => {
      const current = nodeQueue.shift();
      if (!current) return;

      console.log(current.value);
      if (current.left) nodeQueue.push(current.left);
      if (current.right) nodeQueue.push(current.right);

      bfs();
    }

    bfs();
  }

  const tree = new Tree<number>(new Node(1));
  tree.root.left = new Node(2);
  tree.root.left.left = new Node(3.5);
  tree.root.left.right = new Node(3.75);
  tree.root.right = new Node(3);

  tree.root.right.left = new Node(4);
  tree.root.right.right = new Node(5);
  
  printLevels(tree); // print as bfs
})()