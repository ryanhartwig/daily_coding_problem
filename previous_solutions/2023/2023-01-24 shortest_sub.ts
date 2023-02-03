(() => {
  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Square.

  Given a string and a set of characters, return the shortest substring containing all the characters in the set.

  For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

  If there is no substring containing all the characters in the set, return null.
  
  */


  const shortest = (string: string, query: string) => {
    let current: string | null = null;

    string.split('').forEach((c, i, arr) => {
      let working = new Set(query.split(''));

      if (working.has(c)) {
        working.delete(c);
        arr.slice(i + 1).find((c, j) => {
          if (working.has(c)) {
            working.delete(c);

            if (!working.size) {
              const word = arr.slice(i, j + i + 2).join('');
              if (current === null || current.length > word.length) current = word;
            }
          }


        })
      }
    })
    
    return current;
  }

  console.log(shortest('figehaeci', 'aei'))
  
  
})()


/* 
let shortest = Infinity;

    const split = string.split('');
    const queryChars = new Set(query.split(''));

    const findAll = (arr: string[], remaining: Set<string>, count: number) => {
      if (!remaining.size) shortest = Math.min(shortest, count);
      if (!arr.length) return;

      let current = arr[0];
      if (remaining.has(current)) {
        remaining.delete(current);
        findAll(arr.slice(1), remaining, count + 1);
      } else {

      }

    }
    
    split.forEach((c, i, arr) => {
      if (queryChars.has(c)) {
        const remaining = new Set(queryChars);
        remaining.delete(c);
        findAll(arr.slice(i + 1), remaining, 1)
      }
    })

    return shortest === Infinity ? null : shortest;




    string.split('').forEach((c, i, arr) => {
      let working = new Set(query.split(''));
      console.log(working)

      if (working.has(c)) {
        let left = i;
        working.delete(c);

        arr.slice(left).forEach((c, j) => {
          if (i === 0) return false;


          if (working.has(c)) {
            working.delete(c);
            if (!working.size) {
              if (shortest > j - i) {
                current = arr.slice(left, j + 2).join('');
                console.log(current);
                shortest = j - i;
                return true;
              }
              return true;
            }
          } 
        })
      }
    });

*/