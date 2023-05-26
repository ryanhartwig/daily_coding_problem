/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Square.

Given a list of words, return the shortest unique prefix of each word. For example, given the list:

dog
cat
apple
apricot
fish
Return the list:

d
c
app
apr
f

*/

(() => {

  const shortestUnique = (words: string[]) => {
    
    const wordsMap = new Map<string, string[]>();
    for (const word of words) wordsMap.set(word[0], [...(wordsMap.get(word[0]) ?? []), word]);

    return words.map(w => {
      const words = wordsMap.get(w[0])!;
      if (words.length === 1) return w[0];
      const otherWords = words.filter(curr => curr !== w)

      for (let i = 0; i < w.length; i++) {
        if (otherWords.some(current => current[i] === w[i])) continue;
        else {
          return w.slice(0, i + 1);
        }        
      }
    });
  }
  
  
  console.log(shortestUnique(['dog', 'cat', 'apple', 'apricot', 'fish']));
  // d c app apr f
})()