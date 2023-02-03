/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".


substr = ''

a
if arr.length <= k add
  [a]
  temp += 'a'
else
  if a in arr
    temp += 'a'
  else 
    if temp.length > substr.length
      substr = temp;



abcba => bcb

a
[
  [a],
]

b
[
  [a, b],
  [b],
]

c
[
  [a, b] <--- c not in a,b, therefore this entry is joined and set to substr if longer
  [b, c],
  [c],
]
-
[
  [b, c],
  [c],
]
substr = 'ab'

b
[
  [b, c, b],
  [c, b],
  [b],
]

a
[
  [b, c, b], <--- a not in b,c,b && bcb longer than substr, so set substr and remove entry
  [c, b], <-- a not in c,b && cb NOT longer than substr. remove entry
  [a]
]

substr = bcb


*/


const findUniqueSubstr = (k: number, str: string): string => {
  let substr = '';  
  let substrings: any = [];
  
  // Add unique element at end for one extra iteration (hack)
  [...str.split(''), '$'].forEach((char) => {
    substrings.push([]);
    substrings = substrings.map((el: string[]) => {
      if (el) {
        if (el.length < k || el.includes(char)) {
          return [...el, char]
        } else {
          if (el.length > substr.length) {
            substr = el.join('');
          }
        }
      }
      return null;
    });
  })
  return substr;
}

let res = findUniqueSubstr(2, 'abcba');
console.log(res);