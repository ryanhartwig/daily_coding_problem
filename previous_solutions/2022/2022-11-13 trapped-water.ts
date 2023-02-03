/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

[2, 1, 2] => 1
[3, 0, 1, 3, 0, 5] => 8
[3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1] => 14


[1, 2, 3, 2, 1, 2]

lm = element at index 0 
rm = element at last index
lind = 0
rind = last index number
while lIndex < rightIndex
  if (lm <= rm)
    lind++ 
    if element at lind > lm
      lm = element
    else 
      water += lm - element
  else
    rind--
    if element at rind > rm
      rm = element
    else
      water += rm - element

*/

const getTrappedWater = (arr: number[]): number => {
  let leftI = 0;
  let rightI = arr.length - 1;
  let leftMax = arr[0];
  let rightMax = arr[rightI];
  let water = 0;

  while (leftI < rightI) {
    if (leftMax <= rightMax) {
      leftI++;
      if (arr[leftI] > leftMax) leftMax = arr[leftI];
      else water += leftMax - arr[leftI];
    } else {
      rightI--;
      if (arr[rightI] > rightMax) rightMax = arr[rightI];
      else water += rightMax - arr[rightI]
    }
  }

  return water;
}

let water = getTrappedWater([2, 1, 2]);
console.assert(water === 1, `water: ${water}, expected: 8`);

water = getTrappedWater([3, 0, 1, 3, 0, 5]);
console.assert(water === 8, `water: ${water}, expected: 8`);

water = getTrappedWater([3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1]);
console.assert(water === 14, `water: ${water}, expected: 14`);
