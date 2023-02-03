/*

Longest running string problem:

'AAAABBBCCDDDDDDEEFAA' => [A4, B3, C2, D6, E2, F1, A2]

*/

const decryptLongestRunning = (code: string): string[] => {
  let current: string = 'AA';
  const decrypted: string[] = [];

  code.split('').forEach((char, i, arr) => {
    if (!i) return current = `${char}1`;

    if (char !== arr[i - 1]) {
      decrypted.push(current);
      current = `${char}1`;
    } else {
      current = `${char}${Number(current[1]) + 1}`;
    }
    if (i === arr.length-1) decrypted.push(current);
  }); 
  
  
  return decrypted;
}

let actual = decryptLongestRunning('AAAABBBCCDDDDDDEEFAB');
const expected = ['A4', 'B3', 'C2', 'D6', 'E2', 'F1', 'A1', 'B1'];

console.assert(JSON.stringify(actual) === JSON.stringify(expected), `Expected ${actual} to equal ${expected}`)