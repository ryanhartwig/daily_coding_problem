/* 

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

const containsDuplicate = (nums: number[]): boolean => {
  const existing = new Set<number>();
  return nums.some(n => existing.delete(n) || !existing.add(n));
}
