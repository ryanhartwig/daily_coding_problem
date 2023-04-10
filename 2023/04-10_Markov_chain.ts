/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

You are given a starting state start, a list of transition probabilities for a Markov chain, and a number of steps num_steps. Run the Markov chain starting from start for num_steps and compute the number of times we visited each state.

For example, given the starting state a, number of steps 5000, and the following transition probabilities:

[
  ('a', 'a', 0.9),
  ('a', 'b', 0.075),
  ('a', 'c', 0.025),
  ('b', 'a', 0.15),
  ('b', 'b', 0.8),
  ('b', 'c', 0.05),
  ('c', 'a', 0.25),
  ('c', 'b', 0.25),
  ('c', 'c', 0.5)
]
One instance of running this Markov chain might produce { 'a': 3012, 'b': 1656, 'c': 332 }.

*/

;(() => {

  const chain = (start: string, list: [string, string, number][], steps: number) => {
    const values = new Map<string, [number, string][]>(new Map());

    list.forEach(([start, dest, probability]) => {
      const current = values.get(start);
      let accumulativeProbability = 0;
      if (current) {
        const [[prob]] = current.slice(-1);
        accumulativeProbability = prob;
      }

      values.set(start, [...current ?? [], [probability + accumulativeProbability, dest]]);
    });

    let state = start;
    const occurences = new Map<string, number>(new Map());

    for(let i = 0; i < steps; i++) {
      const probabilities = values.get(state)!;
      const roll = Math.random();
      probabilities.find(([probability, next]) => {
        if (roll < probability) {
          occurences.set(next, (occurences.get(next) ?? 0) + 1);
          state = next;
          return true;
        }
      });
    }

    return occurences;
  }

  const list: [string, string, number][] = [
    ['a', 'a', 0.9],
    ['a', 'b', 0.075],
    ['a', 'c', 0.025],
    ['b', 'a', 0.15],
    ['b', 'b', 0.8],
    ['b', 'c', 0.05],
    ['c', 'a', 0.25],
    ['c', 'b', 0.25],
    ['c', 'c', 0.5]
  ]

  console.log(chain('a', list, 5000));
  
})();