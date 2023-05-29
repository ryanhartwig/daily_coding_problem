/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


*/

interface Closing {
  ')': '(', 
  ']': '[', 
  '}': '{',
}

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const closing: Closing = {
    ')': '(', 
    ']': '[', 
    '}': '{',
  }

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const open = closing[curr as keyof Closing]

    if (open) {
      if (!stack.length) return false;
      if (open !== stack.pop()) return false;
      continue;
    } else {
      stack.push(curr);
    }
  }

  return !stack.length;
};

console.log(isValid("()[]{}}"));