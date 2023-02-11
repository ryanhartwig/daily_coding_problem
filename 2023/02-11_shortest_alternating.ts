import { DirectedGraph, Vertex } from "../data-structures/Graph";

/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Implement the singleton pattern with a twist. First, instead of storing one instance, store two instances. And in every even call of getInstance(), return the first instance and in every odd call of getInstance(), return the second instance.


*/

(() => {

  function* getInstance(fn: (...args: any) => any) {
    let i = 0;

    while (true) {
      if (i % 2 !== 0) {
        console.log('executing second instance');
        yield fn();
      } else {
        console.log('executing first instance');
        yield fn();
      }
      i++;
    }
  }

 const instance = getInstance(() => console.log('hurray!'));

 instance.next();
 instance.next();
 instance.next();
 instance.next();
 instance.next();
 instance.next();
 instance.next();
 instance.next();
 instance.next();


  
})()