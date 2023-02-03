/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. 

Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.


*/

interface Orders {
  orders: number[];
}

class Orders {
  constructor() {
    this.orders = [];
  }

  record(order_id: number) {
    this.orders.push(order_id);
  }

  get_last(i: number = 1) {
    return this.orders[this.orders.length-i];
  }

  print() {
    console.log(this.orders);
  }
}

const orders = new Orders();

orders.record(15);
orders.record(2409246);
orders.record(1041581330);
orders.record(145105);
orders.record(1508135);
orders.record(23);

orders.print();
console.log(orders.get_last(2));
