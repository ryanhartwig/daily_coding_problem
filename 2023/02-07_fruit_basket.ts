(() => {

  /* 
  You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

  You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

  You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
  Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
  Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
  Given the integer array fruits, return the maximum number of fruits you can pick.

  Input: fruits = [1,2,1]
  Output: 3
  Explanation: We can pick from all 3 trees.

  Input: fruits = [0,1,2,2]
  Output: 3
  Explanation: We can pick from trees [1,2,2].
  If we had started at the first tree, we would only pick from trees [0,1].

  Input: fruits = [1,2,3,2,2]
  Output: 4
  Explanation: We can pick from trees [2,3,2,2].
  If we had started at the first tree, we would only pick from trees [1,2].


  max 0

  track left index
  track value at leftmost index

  "basket" - variable to hold unique fruits
    set - add to the set & compare against set size (validating it is <= 2)

  iterate through fruits
    add the tree index to "basket" set

    if basket size > 2
    compare max against length of array from left index to curr - 1 ind

    while element at left index === value at leftmost index {
      increment left index 
    }

    delete ffrom "basket" value at left

  time - O(n)
  space - O(1)
  
  */  


  function totalFruit(fruits: number[]): number {
    let max = 0;

    let left = 0;
    let leftValue = fruits[left];
    const lastIndices = new Map<number, number>();

    const basket = new Set<number>();

    for (let i = 0; i < fruits.length; i++) {
      basket.add(fruits[i]);
      lastIndices.set(fruits[i], i);

      if (basket.size > 2) { 
        max = Math.max(fruits.slice(left, i).length, max);

        while(basket.size > 2) {
          if (lastIndices.get(leftValue) === left) {
            basket.delete(leftValue);
          }

          left++;
          leftValue = fruits[left];
          basket.add(leftValue);
        }

      }

    }
    max = Math.max(fruits.slice(left, fruits.length).length, max);
    
    return max;
  };

  console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));

  
})()