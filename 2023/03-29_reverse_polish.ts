/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Jane Street.

Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5, since it is equivalent to ((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.

*/


(() => {

  // Assumes valid input
  const reversePolish = (values: (number | string)[]) => {
    const valuesStack: (number | string)[] = [];

    for (const v of values) {
      if (typeof v === 'number') {
        valuesStack.push(v);
      } else {
        const [x, y] = valuesStack.splice(-2) as [number, number];

        switch(v) {
          case '+':
            valuesStack.push(x + y);
            break;
          case '-':
            valuesStack.push(x - y);
            break;
          case '/':
            valuesStack.push(x / y);
            break;
          case '*':
            valuesStack.push(x * y);
            break;
        }
      }
    }

    return valuesStack[0];
  }

  console.log(reversePolish([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'])); // 5
  
})()