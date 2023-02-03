
/* 

Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less. You must break it up so that words don't break across lines. Each line has to have the maximum possible amount of words. If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.

'hello beat'
10, splits into ['hello beat']

'hello bea 'end of the 

*/




const split = (input: string, k: number): string[] | null => {
  const results: string[] = [];

  const recurse = (string: string = input) => {
    if (string.length <= 10) return results.push(string);
    
    const [c1, c2] = string.slice(k - 1, k + 1);

    if ([c1, c2].includes(' ')) {
      if (c1 === ' ') {
        results.push(string.slice(0, k - 1));
        recurse(string.slice(k));
      } else if (c2 === undefined || c2 === ' ') {
        results.push(string.slice(0, k));
        recurse(c2 === ' ' ? string.slice(k + 1) : string.slice(k));
      }
    } else {
      const substr = string.slice(0, k).split('');
      const spaceIndex = Math.abs(substr.reverse().findIndex(c => c === ' ') - k) - 1;

      if (spaceIndex === - 1) {
        return;
      } else {
        results.push(string.slice(0, spaceIndex));
        recurse(string.slice(spaceIndex + 1))
      }
    }
  }

  recurse();

  return results.length ? results : null;
}


const split_input = "the quick brown fox jumps over the lazy dog";
const split_expected = ["the quick", "brown fox", "jumps over", "the lazy", "dog"];
const split_actual = split(split_input, 10);


console.assert(JSON.stringify(split_actual) === JSON.stringify(split_expected), `act: [${split_actual}], exp: [${split_expected}]`);