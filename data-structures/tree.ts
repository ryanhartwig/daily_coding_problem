export interface Node<T> {
  value: T,
  left: Node<T> | null,
  right: Node<T> | null,
}

export interface Tree<T> {
  root: Node<T>,
}


export class Node<T> {
  constructor(value: T, left: Node<T> | null = null, right: Node<T> | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class Tree<T> {
  constructor(root: Node<T>) {
    this.root = root;
  }
}

