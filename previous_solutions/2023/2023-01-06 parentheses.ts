(() => {
  /* 
  Good morning! Here's your coding interview problem for today.

  This problem was asked by Google.

  Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

  For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
  
  */
  
  const invalidParentheses = (str: string) => {
    let open = 0;
    let invalid = 0;

    str.split('').filter(c => ['(', ')'].includes(c)).forEach(p => {
      if (p === ')') {
        if (open) {
          open--;
        } else {
          invalid++;
        }
      } else open++;
    })

    return open + invalid;
  }

  const resA = invalidParentheses('()())()');
  const resB = invalidParentheses(')(');


  console.assert(resA === 1, `received ${resA}`)
  console.assert(resB === 2, `received ${resB}`)

  console.log(invalidParentheses(`
    console.log('hello world!');
    console.log()'hello again~~!');
    console.log)'oh boy(';
  `))
  
  
  
})()