/* 


Good morning! Here's your coding interview problem for today.

This problem was asked by YouTube.

Write a program that computes the length of the longest common subsequence of three given strings. For example, given "epidemiologist", "refrigeration", and "supercalifragilisticexpialodocious", it should return 5, since the longest common subsequence is "eieio".



*/

;(() => {

  const longestCommon = (strA: string, strB: string) => {
    const commonChars = new Map<string, number>();

    const mapA = new Map<string, number>();
    const mapB = new Map<string, number>();


    [strA, strB].forEach((str, i) => {
      for (const char of str.split('')) {
        [mapA, mapB][i].set(char, ([mapA, mapB][i].get(char) ?? 0) + 1);
      }
    });

    mapA.forEach((count, char) => {
      let minCount = Infinity;

      let mapBCount = mapB.get(char);
      if (!mapBCount) return;

      minCount = Math.min(count, mapBCount);
      commonChars.set(char, minCount);
    });



  }

  console.log(longestCommon('health', 'wealth'));
  
  // time limit reached
})();


// const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

// function get_lcs(strings: string[], context: string, indices: number[]): number {
//   let lcs_len = context.length;

//   for (const letter of ALPHABET) {
//     const new_indices: number[] = [];

//     for (let j = 0; j < strings.length; j++) {
//       const string = strings[j];
//       const index = string.indexOf(letter, indices[j] + 1);

//       if (index === -1) {
//         break;
//       }

//       new_indices.push(index);
//     }

//     if (new_indices.length === 3) {
//       const length_cs = get_lcs(strings, context + letter, new_indices);

//       if (length_cs > lcs_len) {
//         lcs_len = length_cs;
//       }
//     }
//   }

//   return lcs_len;
// }

// function get_lcs_helper(strings: string[]): number {
//   return get_lcs(strings, "", Array(strings.length).fill(-1));
// }


// Tests
// console.log(get_lcs_helper(["epidemiologist", "refrigeration", "supercalifragilisticexpialodocious"]));