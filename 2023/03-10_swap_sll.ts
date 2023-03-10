/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

*/

import { SinglyLinkedList, Node } from "../data-structures/SLL"

;(() => {

  const swap = (sll: SinglyLinkedList) => {
    if (!sll.head) return;
    if (!sll.head.next) return sll;
    
    let prev: Node | null = null;
    let post: Node | null = null;

    const swapTraverse = (n: Node = sll.head!) => {
      let left = n;
      let right = n.next;

      if (right) {
        post = right.next;

        if (n === sll.head) sll.head = right;
      }

      if (prev) {
        prev.next = right;
      }

      if (right) {
        right.next = left;
      }

      if (left) {
        left.next = post;
        prev = left;
      }

      post = null;
      if (left.next) swapTraverse(left.next);
    }

    swapTraverse();

    return sll;
  }

  const sll = new SinglyLinkedList();

  sll.head = new Node('1');
  sll.head.next = new Node('2');
  sll.head.next.next = new Node('3');
  sll.head.next.next.next = new Node('4');
  
  swap(sll)?.print();
})()