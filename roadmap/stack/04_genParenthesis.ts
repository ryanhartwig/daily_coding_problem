/* 

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

((()))
(())()

()(())
()()()

n =0 
[(((]

2
[(]
 
  1
  [(]
  0
  [(())]

  1
  [()()]
  0
  [()(())]

2
[()]


recursion function 
accepts # open brackets remaining


*/


export function generateParenthesis(n: number): string[] {
  const results: string[] = [];
  const stack: string[] = [];
  
  const recurse = (open = 0, close = 0) => {
    if (stack.length === n*2) {
      results.push(stack.join(''));
      return;
    }
    
    if (open < n) {
      stack.push('(');
      recurse(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(')');
      recurse(open, close + 1);
      stack.pop();
    }
  }
  recurse();
  
  return results;
};

console.log(generateParenthesis(3));