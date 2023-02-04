(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Google.

  Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

  Follow-up: given a mutable string representation, can you perform this operation in-place?
  
  split string into array by its spaces
  reverse the array
  return the joined array (joined with spaces) 

  
  */

  
  const reverse = (string: string) => {
    return string.split(' ').reverse().join(' ');
  }

  const inPlace = (string: string) => {
    let mutable = string.split(' ');

    for (let i = 0; i < mutable.length / 2; i++) {
      let copy = mutable[i];
      const j = mutable.length - 1 - i;
      mutable[i] = mutable[j];
      mutable[j] = copy;
    }

    return mutable.join(' ');
  }
  

  // console.log(inPlace("hello world here"));



  function convert(s: string, numRows: number): string {
    let direction: 'd' | 'u' = 'd';
    let matrix: string[][] = [];
    let x = 0, y = 0;
    let result = '';

    for (let i = 0; i < numRows; i++) {
      matrix.push([]);
    }

    s.split('').forEach(c => {
        if (y === numRows - 1) direction = 'u';
        else if (y === 0) direction = 'd';

        if (direction === 'd') {
          matrix[y++][x] = c;
        }

        if (direction === 'u') {
          matrix[y--][x++] = c;
        }
    });

    for (const row of matrix) {
      for (const c of row) {
        if (c) result += c;
      }
    }
    return result;
  };

  console.log(convert("PAYPALISHIRING", 3))
})()