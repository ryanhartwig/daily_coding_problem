



/* 

  Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

  It should run in O(N) time.

  Hint: Make sure each one of the 52! permutations of the deck is equally likely.


  for each element in arr 
    swap with random element in arr

*/

const shuffle = (n: number) => {
  const arr = [...Array(n)].map(() => Math.ceil(Math.random() * n));

  arr.forEach((num, i, arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  });
}
shuffle(52);