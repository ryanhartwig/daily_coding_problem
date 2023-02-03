console.clear();


/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.


*/

let count = 0;

const numDecodes = (str: string) => {
  // let str = string.split('');

  if (str.length === 1 && Number(str[0]) !== 0) {
    count++
    return;
  }


  // single digit recurse [1]
  let val = Number(str[0]); // 1
  let right = str.slice(1); // [1]

  if (val) {
    if (!right.length) {
      count++;
      return;
    }
    numDecodes(right);
  }

  // double digit recurse
  if ([1,2].includes(Number(str[0]))) {
    let val2 = Number('' + str[0] + str[1]); // 11
    let right2 = str.slice(2);

    if (val2 < 27) {
      if (!right2.length) {
        count++;
        return;
      }
      numDecodes(right2);
    }
  }
  
}


numDecodes('11111111111111');
console.log(count);

