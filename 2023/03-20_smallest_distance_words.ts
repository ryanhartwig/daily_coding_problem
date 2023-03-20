/* 

Good morning! Here's your coding interview problem for today.

Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.

*/

;(() => {

  const smallest = (words: [string, string], str: string) => {
    const [word1, word2] = words;
    const wordsArray = str.split(' ');
    
    let smallest = Infinity;
    let word1LastIndex: number | null = null;
    let word2LastIndex: number | null = null;

    for (let i = 0; i < wordsArray.length; i++) {
      const current = wordsArray[i];

      if (words.includes(current)) {
        if (current === word1) {
          word1LastIndex = i;
          if (word2LastIndex === null) continue;

          console.log(i, word2LastIndex)
          smallest = Math.min(i - word2LastIndex, smallest);
        } else if (current === word2) {
          word2LastIndex = i;
          if (word1LastIndex === null) continue;

          smallest = Math.min(i - word1LastIndex, smallest);
        }
      }
    }

    return smallest - 1;
  };

  console.log(smallest(['hello', 'world'], 'dog cat hello cat dog dog hello cat world'));
  
})();