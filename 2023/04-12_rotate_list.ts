import { SinglyLinkedList, Node } from '../data-structures/sll';


/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a linked list and a positive integer k, rotate the list to the right by k places.

For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.

Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.

*/

(() => {

  const rotate = (list: SinglyLinkedList<any>, k: number) => {
    if (!list.head) return null;
    if (k === 0) return list;

    let left = list.head;
    let leftPrev = list.head;
    let right = list.head;

    for (let i = 0; i < k - 1; i++) {
      right = right.next ?? list.head;
    }

    if (!right.next) return list;

    while (right.next !== null) {
      leftPrev = left;
      left = left.next!;
      right = right.next!;
    }

    leftPrev.setNext(null);
    right.setNext(list.head);
    list.setHead(left);
    
    return list;
  }

  const list = new SinglyLinkedList<number>();
  list.setHead(new Node(1));
  list.head!.setNext(new Node(2));
  list.head?.next?.setNext(new Node(3));
  list.head?.next?.next?.setNext(new Node(4));
  list.head?.next?.next?.next?.setNext(new Node(5));

  rotate(list, 4);

  list.print();
  
})()