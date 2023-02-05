(() => {

  /* 

  Good morning! Here's your coding interview problem for today.
≈
  This problem was asked by Facebook.

  Given a string and a set of delimiters, reverse the words in the string while maintaining the relative order of the delimiters. For example, given "hello/world:here", return "here/world:hello"

  Follow-up: Does your solution work for the following cases: "hello/world:here/", "hello//world:here"

  */

  const reverse = (str: string): string => {
    if (!str.length) return '';
    
    const delimiters: string[] = [];
    const words: string[] = [];

    let left = 0;
    for (let i = 0; i < str.length; i++) {

      // Current character is a delimiter
      if (str[i].toUpperCase() === str[i].toLowerCase()) {
        const lastWord = str.slice(left, i);
        left = i + 1;
        
        if (!lastWord.length && delimiters.length) {
          delimiters[delimiters.length -1] += str[i];
          continue;
        } else if (!lastWord.length) {
          delimiters.push(str[i]);
          continue;
        }

        words.push(lastWord);
        delimiters.push(str[i]);
      } 

      if (i === str.length - 1) {
        words.push(str.slice(left));
      }
    }
    
    return words.reverse().map(word => {
      const delimiter = delimiters.shift();
      return delimiter ? word + delimiter : word;
    }).join('');
  }
  
  console.log(reverse('hello/world:here'));
  console.log(reverse('hello//world:here'));

})()