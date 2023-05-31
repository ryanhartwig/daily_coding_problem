/*

Description
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode

Example
Example1

Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"
Example2

Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]
Explanation:
One possible encode method is: "we:;say:;:::;yes"

*/

const encode = (strs: string[]) => {
  let encoded = '';
  for (const word of strs) {
    encoded += `${word.length}/${word}`;
  }
  return encoded;
}

const decode = (str: string) => {
  let decoded: string[] = [];
  const chars = str.split('');

  while (chars.length) {
    let numString = '';

    while (chars[0] !== '/') {
      numString += chars.shift();
    }
    chars.shift();
    decoded.push(chars.splice(0, Number(numString)).join(''));
  }
  return decoded;
}


console.log(decode(encode(["lint","code","love","you"])));
console.log(decode(encode(["we", "say", ":", "yes"])));
console.log(decode(encode(['happy', 'm3/an//3/n', 'eats', 'tree'])));