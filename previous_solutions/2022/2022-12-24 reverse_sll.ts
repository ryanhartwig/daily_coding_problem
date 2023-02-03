import { Node, SinglyLinkedList } from "../SLL";

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the head of a singly linked list, reverse it in-place.



pseudo:
set head to temporary n
set head to tail & tail to n
iterate
  link backwards using ref

*/

(() => {
  const A = new Node('A');
  A.setNext(new Node('B'));
  A.next?.setNext(new Node('C'));

  const sll = new SinglyLinkedList();

  sll.setHead(A);
  sll.print();

  const reverse = (head: Node) => {
    let prev = head;
    let next = head.next;
    head.setNext(null);

    const recurse = (n: Node) => {
      next = n.next;
      
      n.setNext(prev);
      prev = n;

      if (next) recurse(next)
      else sll.setHead(n);
    }

    if (next) {
      recurse(next);
    }
  }

  reverse(sll.head!);
  sll.print();
})()