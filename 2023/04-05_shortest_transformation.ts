/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

*/

(() => {

  const shortest = (start: string, end: string, dictionary: string[]) => {
    if (!start.length || !end.length || !dictionary.length) return null;
    
    const dict = new Set(dictionary);
    const sequence: string[] = [start];
    let noWord = false;

    const transform = (current: string = start) => {
      if (current === end) return;
      
      let startLength = sequence.length;
      for(let i = 0; i < end.length; i++) {
        if (current[i] !== end[i]) {
          let candidate = [...current.slice(0, i), end[i], current.slice(i + 1)].join('');

          if (dict.has(candidate)) {
            sequence.push(candidate);
            transform(candidate);      
          }
        }
      }
      if (startLength === sequence.length) {
        noWord = true;
      }
    }

    transform();

    if (noWord) return null;
    return sequence;
  }

  console.log(shortest('dog', 'cat', ['dot', 'dop', 'dat', 'cat'])); // [ 'dog', 'dot', 'dat', 'cat' ]
  console.log(shortest('dog', 'cat', ['dot', 'tod', 'dat', 'dar'])); // null
  
})()