/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Dropbox.

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

*/

;(() => {

  const columnId = (column: number) => {
    let id = column;
    const alphabet = ['', ...Array(26).fill(true).map((_, i) => String.fromCharCode(i + 97))];
    const result: string[] = [];

    while (id > 26) {
      let index = id % 26 || 26;
      result.unshift(alphabet[index]);
      id = (id - index) / 26;
    }
    result.unshift(alphabet[id]);

    return result.join('').toUpperCase();
  }

  console.log(columnId(27)); // AA
  
})();