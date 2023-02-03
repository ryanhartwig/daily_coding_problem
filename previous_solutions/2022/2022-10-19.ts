/* 


Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. 

Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

Each node has 'both' field /property which is an XOR of next and prev nodes
Linked list class has 
  add(element) method which adds an element to the end
  get(index) which returns the node at the index
    nodes stored in an array
 

[a -> b -> c]
b.both ?? in XOR ll
  b.both is an XOR of the next node and the previous node
  XOR compares two inputs and generates one output
    the output is truthy if the bits are different, or falsy if same
  

if both = 0 then prev = next


// node a = 1
// node b = 3
// node c = 5
// node d = 8
// a connects to b
// b connects to c
// c -> d


a.both = 3
b.both = 4
c.both = 11
d.both = 5

*/

let a = 1;
let b = 3;
let c = 5;
let d = 8;
let f = 9;
let g = 10;
let e:any = null;


// next = XOR of (prev and (xor of current's prev and next)
  // AKA next = XOR of prev and both


/* 


Each node has 'both' field /property which is an XOR of next and prev nodes
Linked list class has 
  add(element) method which adds an element to the end
  get(index) which returns the node at the index
    nodes stored in an array
 
*/
interface NodeX {
  data: number,
  both: number | null;
}
interface XORLinkedList {
  nodes: NodeX[];
  tail: null | NodeX;
  size: number;
}

class NodeX {
  constructor(data: number, both = null) {
    this.data = data;
    this.both = both;
  }

  setBoth(prevData: number, nextData: number) {
    this.both = prevData & nextData;
  }
}

class XORLinkedList {
  constructor() {
    this.nodes = [];
    this.tail = null;
    this.size = 0;
  }

  add(node: NodeX) {
    let tailData = this.tail?.data || 0;
    node.both = (tailData ^ 0)

    // Set the tail's 'both' 
    if (this.tail) {
      let tailPrev = this.nodes[this.size - 2]
        ? this.nodes[this.size -2].data 
      : 0
      this.tail.both = (tailPrev ^ node.data);
    }

    this.nodes.push(node);
    this.tail = node;
    this.size++
  }
  
  get(index: number): NodeX | null {
    return this.nodes[index] || null;
  }

  traverse(prev = 0, current = this.nodes[0]) {
    if (!current) {
      return console.log('List is empty');
    }

    console.log(` - - node: ${current.data}\nfinding next...`);

    let both = current.both || 0;
    let dataOfNext = (prev^both);
    let next = this.nodes.find((node) => node.data === dataOfNext);

    if (!next) {
      return console.log('-- reached end of list');
    }

    this.traverse(current.data, next);
  }
}

let A = new NodeX(20469);
let B = new NodeX(314);
let C = new NodeX(3);
let D = new NodeX(2);
let E = new NodeX(15);

let list = new XORLinkedList();

list.add(A);
list.add(B);
list.add(C);
list.add(D);
list.add(E);


console.log('\n\n\n\nTraverse-----')
list.traverse();

// Data can't be 0 or duplicates 