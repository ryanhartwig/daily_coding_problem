/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.


- assume set contains unique values?


           dog
   deer          duplicate
deal  dent

'de'

           dog
   deag          duplicate
deaf  deal




'dea'


root dog
  if de not in dog
    find index of first non-similar character using for loop 
    (in this case, index of 1)
    
    check numeric index of query string against non-similar character, and check right or left binary of binary tree


''.charChodeAt(index)
String.fromCharCode(code);

*/

interface TreeNode {
  data: string,
  left: TreeNode | null,
  right: TreeNode | null,
}
interface Tree {
  root: TreeNode | null;
  set: Set<string>
}

class Tree {
  constructor() {
    this.root = null;
    this.set = new Set();
  }

  insert(node: TreeNode) {
    if (!this.root) {
      this.root = node;
    } else {
      this.root.insert(node);
    }
  }

  query(q: string) {
    if (this.root) {
      return this.root.query(q, this.set);
    } else {
      return null;
    }
  }
  
}

class TreeNode {
  constructor(data: string) {
    this.data = data,
    this.left = null;
    this.right = null;
    
  }

  query(q: string, matches: Set<string>) {
    if (this.data.includes(q)) {
      matches.add(this.data);

      // case 'de' against 'de****' (need to check left and right)
      if (this.left) {
        this.left.query(q, matches);
      } if (this.right) {
        this.right.query(q, matches);
      }
    } else {
      for (let i = 0; i < q.length; i++) {
        if (q[i] !== this.data[i]) {
          // case 'de' against dub
          if (q.charCodeAt(i) < this.data.charCodeAt(i)) {
            if (this.left) {
              this.left.query(q, matches);
            } else {
              return;
            }
          } else {
            // case 'de' against dab
            if (this.right) {
              this.right.query(q, matches);
            } else {
              return;
            }
          }
        }
      }
    }
    return matches;
  }

  insert(n: TreeNode) {
    for (let i = 0; i < n.data.length; i++) {
      if (this.data[i] === undefined) {
        if (this.right) {
          this.right.insert(n);
        } else {
          this.right = n;
        }
        return;
      }

      if (n.data[i] !== this.data[i]) {
        if (this.data.charCodeAt(i) > n.data.charCodeAt(i)) {
          if (this.left) {
            this.left.insert(n);
          } else {
            this.left = n;
          }
          return;
        } else {
          if (this.right) {
            this.right.insert(n);
          } else {
            this.right = n;
          }
          return;
        }
      }
    }
    // n string length reached and all matched (aka this.data.length > n.data.length)
    if (this.left) {
      this.left.insert(n);
    } else {
      this.left = n;
    }
  }
}


const tree = new Tree();

const dog = new TreeNode('dog');
const deer = new TreeNode('deer');
const deal = new TreeNode('deal');
const dent = new TreeNode('dent');
const duplicate = new TreeNode('duplicate');

tree.insert(dog);
tree.insert(deer);
tree.insert(deal);
tree.insert(dent);
tree.insert(duplicate);
tree.insert(new TreeNode('dee'));
tree.insert(new TreeNode('dea'));

console.log(tree);
console.log(tree.root?.left);


console.log(tree.query('dup'))



/*

interface TreeNode {
  data: string,
  left: TreeNode | null,
  right: TreeNode | null,
}
interface Tree {
  root: TreeNode | null;
  set: Set<string>
}

class Tree {
  constructor() {
    this.root = null;
    this.set = new Set();
  }

  insert(node: TreeNode) {
    if (!this.root) {
      this.root = node;
    } else {
      this.root.insert(node);
    }
  }

  query(q: string) {
    if (this.root) {
      return this.root.query(q, []);
    } else {
      return null;
    }
  }
  
}

class TreeNode {
  constructor(data: string) {
    this.data = data,
    this.left = null;
    this.right = null;
    
  }

  query(q: string, matches: string[]): string[] {
    console.log(`\n-----q: ${q}, matches: [${matches}], this.data ${this.data}`)
    if (this.data.includes(q)) {
      console.log(`\n${this.data} included ${q}
      
      and will check against ${this.left?.data}
      and ${this.right?.data}\n`)
      matches.push(this.data);

      // case 'de' against 'de****' (need to check left and right)
      if (this.left) {
        matches = this.left.query(q, matches);
      } if (this.right) {
        matches = this.right.query(q, matches);
      }
      console.log('reached end of thing');
      console.log(this.left?.data || 'empty left');
      console.log(this.right?.data || 'empty right');
    } else {
      for (let i = 0; i < q.length; i++) {
        if (q[i] !== this.data[i]) {
          // case 'de' against dub
          if (q.charCodeAt(i) < this.data.charCodeAt(i)) {
            if (this.left) {
              matches = this.left.query(q, matches);
            } else {
              return matches;
            }
          } else {
            // case 'de' against dab
            if (this.right) {
              matches = this.right.query(q, matches);
            } else {
              return matches;
            }
          }
        }
      }
    }
    return matches;
  }

  insert(n: TreeNode) {
    for (let i = 0; i < n.data.length; i++) {
      if (this.data[i] === undefined) {
        if (this.right) {
          this.right.insert(n);
        } else {
          this.right = n;
        }
        return;
      }

      if (n.data[i] !== this.data[i]) {
        if (this.data.charCodeAt(i) > n.data.charCodeAt(i)) {
          if (this.left) {
            this.left.insert(n);
          } else {
            this.left = n;
          }
          return;
        } else {
          if (this.right) {
            this.right.insert(n);
          } else {
            this.right = n;
          }
          return;
        }
      }
    }
    // n string length reached and all matched (aka this.data.length > n.data.length)
    if (this.left) {
      this.left.insert(n);
    } else {
      this.left = n;
    }
  }
}


const tree = new Tree();

const dog = new TreeNode('dog');
const deer = new TreeNode('deer');
const deal = new TreeNode('deal');
const dent = new TreeNode('dent');
const duplicate = new TreeNode('duplicate');

tree.insert(dog);
tree.insert(deer);
tree.insert(deal);
tree.insert(dent);
tree.insert(duplicate);
tree.insert(new TreeNode('dee'));
tree.insert(new TreeNode('dea'));

console.log(tree);
console.log(tree.root?.left);


console.log(tree.query('dent'))



*/