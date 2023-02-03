import { DLLNode, DoublyLinkedList } from "../DLL"

(() => {


  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Google.

  Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

  For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.
  
  */

  const isPalindrome = (dll: DoublyLinkedList) => { 
    const head = dll.head;
    const tail = dll.tail;
    if (!head || !tail) return;

    const values:number[] = [];

    // Fill values
    const fillValues = (n = head) => {
      values.push(n.data);
      if (n.next) {
        fillValues(n.next);
      }
    }

    // Check palindrome
    const check = (n = tail, i = 0): boolean => {
      if (values[i] !== n.data) return false;
      
      if (n.prev) {
        return check(n.prev, i + 1);
      } else return true;
    }    

    fillValues();
    return check();
  }

  const dll = new DoublyLinkedList();

  const a = new DLLNode(1);
  const b = new DLLNode(4);
  const c = new DLLNode(3);
  const d = new DLLNode(4);
  const e = new DLLNode(1);

  dll.setHead(a);
  dll.setTail(e);

  a.setNext(b);
  b.setNext(c);
  c.setNext(d);
  d.setNext(e);

  e.setPrev(d);
  d.setPrev(c);
  c.setPrev(b);
  b.setPrev(a);

  console.log(isPalindrome(dll));
})()