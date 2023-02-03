/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.


find the first missing positive integer

i/o

[4,3,-1,2]  => 1  ? or 0 ?

 - will need to be able to identify a gap between elements, since
 [1, 2, 0] => 3, where
 [2, 0] => 1 and not 3

linear time requires that only one iteration is to be made through the array,
  thus some sort of hash table or data structure will be needed to store previous values

[3, 4, -1, 1] => 2
[1, 2, 0] => 3

linked list / graph approach ? 

  create node 3
  create node 4
    4 > 3 
    4 === 3 + 1
    therefore 3.next = 4
    4.prev = 3

  create node -1
    -1 < 4
    -1 < 3
    -1 !== 3 - 1

requires searching through list, which will increaes runtime > O(n)


[3, 4, -1, 1] => 2
[1, 2, 0] => 3

index-based assignments to array

  declare an empty array
  push or unshift each element
    push 3 to array => [3]
    4 > 3, push 4 to array => [3, 4]
    -1 < 3, unshift to array => [-1, 3, 4]
    1 < 3, unshift to array => [1, -1, 3, 4]




[3, 4, -1, 1] => 2
[1, 2, 0] => 3

min, max acceptable values
  test each element against min / max (verify increments 1 above max or 1 below min)

eg.
  declare min and max values to undefined
  for each element in array
  if first iteration
    set min and max to current element
  else 
    if element > max
      if element === max + 1
        max = element
      else return max + 1
    else if element < min
      if element === min - 1
        min = element
      else return min - 1
*/


const findMissingValue = (array) => {
  let min, max;
  let length = array.length;

  for (let i = 0; i <= length; i++) {
    let current = array.shift();

    if (i === 0) {
      [min, max] = [current, current];
    } 
    
    else if (current > max) {
      if (current === max + 1) {
        max = current;
      } else return max + 1
    } else if (current < min) {
      if (current === min - 1) {
        min = current;
      } else return min - 1;
    }
  }

  return max + 1;
}

console.log(findMissingValue([3, 4, -1, 1]));
console.log(findMissingValue([1, 2, 0]));