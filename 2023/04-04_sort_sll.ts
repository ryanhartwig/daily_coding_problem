import { SinglyLinkedList, Node } from "../data-structures/SLL"

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.


iterate through ll
when prev > current
  iterate from current forward until prev < next
    insert as prev element to next
( not O(n log n) )

*/


(() => {

  const sortLL = (l: SinglyLinkedList<number>) => {

    const merge = (head1: Node<number> | null, head2: Node<number> | null): Node<number> | null => {
      let temp = new Node<number>(0); 
      let current = temp; 
    
      while (head1 && head2) { 
        if (head1.data < head2.data) {
          current.next = head1; 
          head1 = head1.next; 
        } else {
          current.next = head2; 
          head2 = head2.next; 
        }
        current = current.next!; 
      }
    
      
      if (head1) {
        current.next = head1;
      } else {
        current.next = head2;
      }
    
      return temp.next; 
    }

    const mergeSort = (head: Node<number> | null): Node<number> | null => {
      // Base case
      if (!head || !head.next) {
        return head;
      }
      
      let slow = head;
      let fast: Node<number> | null = head;
  
      while (fast.next?.next !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast?.next?.next;
      }

      let nextHead = slow.next;
      slow.next = null;

      const left: Node<number> | null = mergeSort(head);
      const right: Node<number> | null = mergeSort(nextHead);

      const mergedList = merge(left, right);
      return mergedList;
    }

    l.head = mergeSort(l.head);

    return l;
  }


  const ll = new SinglyLinkedList<number>();

  ll.setHead(new Node<number>(4))
  ll.head?.setNext(new Node(1));
  ll.head?.next?.setNext(new Node(-3));
  ll.head?.next?.next?.setNext(new Node(99));

  sortLL(ll);

  ll.print();
  
})()


/* (Assisted) */