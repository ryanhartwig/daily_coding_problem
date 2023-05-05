/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given "(()", you could return "(())". Given "))()(", you could return "()()()()".

*/

const minBalanced = (str: string) => {
  let open = 0;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (current === ')') {
      if (open < 1) continue;
      open--; 
      result += current;
    }
    else {
      open++;
      result += current;
    }
  }

  while (open > 0) {
    result += ')';
    open--;
  }

  return result;
}

console.log(minBalanced('(()'));
console.log(minBalanced('))()('));