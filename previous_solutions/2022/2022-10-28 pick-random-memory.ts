/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.


*/


const pickRandom = <T,>(stream: T[]): T => {
  return stream[Math.floor(Math.random() * stream.length)];
}

const picks = [0, 0, 0]

for (let i = 0; i < 10000; i++ ) {
  let pick = pickRandom([0, 1, 2]);

  picks[pick]++;
}

picks.forEach((p) => {
  console.log(picks.reduce((a, b) => a + b) / p);
});


// probably missing something