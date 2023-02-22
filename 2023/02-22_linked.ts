/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.

For example, the following linked list:

1 -> 2 -> 3 -> 4 -> 5
is the number 54321.

Given two linked lists in this format, return their sum in the same linked list format.

For example, given

9 -> 9
5 -> 2
return 124 (99 + 25) as:

4 -> 2 -> 1

*/

(() => {

  const linkedListSum = (list1: number[], list2: number[]): number[] => {
    const list1Numbers: number[] = [];
    const list2Numbers: number[] = [];

    list1.forEach(n => list1Numbers.unshift(n));
    list2.forEach(n => list2Numbers.unshift(n));

    const sum = Number(list1Numbers.join('')) + Number(list2Numbers.join(''));
    const resultList: number[] = [];

    // Simulate adding back into a SLL (as opposed to simply returning the split / reversed sum)
    sum.toString().split('').forEach(n => resultList.unshift(Number(n)))

    return resultList;
  }

  console.log(linkedListSum([9, 9], [5, 2]));
  
  
})()