export interface DLLNode {
  data: number,
  next: DLLNode | null,
  prev: DLLNode | null,
}

export interface DoublyLinkedList {
  head: DLLNode | null, 
  tail: DLLNode | null,
  size: number,
}

export class DLLNode {
  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  setNext(n: DLLNode | null) {
    this.next = n;
  }
  setPrev(n: DLLNode | null) {
    this.prev = n;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(n: DLLNode) {
    this.head = n;
  }
  setTail(n: DLLNode) {
    this.tail = n;
  }

  print(n: DLLNode | null = this.head || null) {
    console.log(n);
    if (n?.next) {
      this.print(n.next);
    }
  }
}