export interface Node {
  data: string,
  next: Node | null,
}

export interface SinglyLinkedList {
  head: Node | null, 
  size: number,
}

export class Node {
  constructor(data: string) {
    this.data = data;
    this.next = null;
  }

  setNext(n: Node | null) {
    this.next = n;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  setHead(n: Node) {
    this.head = n;
  }

  print(n: Node | null = this.head || null) {
    console.log(n);
    if (n?.next) {
      this.print(n.next);
    }
  }
}