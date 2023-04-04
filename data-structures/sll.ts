export interface Node<T> {
  data: T,
  next: Node<T> | null,
}

export interface SinglyLinkedList<T> {
  head: Node<T> | null, 
  size: number,
}

export class Node<T> {
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }

  setNext(n: Node<T> | null) {
    this.next = n;
  }
}

export class SinglyLinkedList<T> {
  constructor() {
    this.head = null;
  }

  setHead(n: Node<T>) {
    this.head = n;
  }

  print(n: Node<T> | null = this.head || null) {
    console.log(n);
    if (n?.next) {
      this.print(n.next);
    }
  }
}