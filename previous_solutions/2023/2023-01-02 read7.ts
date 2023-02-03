(() => {
  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked Microsoft.

  Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

  For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.
  
  */
  
  const read7 = (str: string) => {
    const arr: string[] = [];
    const split = str.split('');

    while (split.length) {
      arr.push(split.splice(0, 7).join(''));
    }
    return arr;
  }
  
  const read = (str: string, n: number) => {
    const newSplits: string[] = [];
    let unfinished = '';
    
    let splits = read7(str);

    splits.forEach(str => {
      const current = str.split('');
      let working = unfinished ? unfinished.split('') : [];

      while (current.length) {
        if (working.length === n) {
          newSplits.push(working.join(''));
          working = [];
        }

        working.push(current.shift()!);
      }

      if (working.length) {
        unfinished = working.join('');
      }
    })

    if (unfinished) newSplits.push(unfinished);

    return newSplits;
  }
  
  console.log(read7('Hello world'));
  console.log(read('Hello world', 10));
})()