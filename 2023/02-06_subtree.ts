(() => {

  /* 
  (leetcode)

  Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
  

  when finding a node that is = subRoot.value (root)
    check left & right against subtree's left & right
  





  deep equality tree check 101
  tree = t, subtree (comparison) = s

  check t.val against s.val and return equality

    
    
    
  
  */



  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


  const isSubtree = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    let equal = false;
    
    const deepEqual = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
      if (t1?.val !== t2?.val) return false;
      if (!t1 && !t2) return true;

      return deepEqual(t1!.left, t2!.left) && deepEqual(t1!.right, t2!.right);
    }
    
    const dfs = (node: TreeNode | null = root) => {
      if (!node || equal) return;

      if (node.val === subRoot?.val) {
        equal = deepEqual(node, subRoot);
      }

      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    }

    dfs();

    return equal;
  };


  
})()