/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

What will this code print out?

function makeFunctions() {
  const flist = [];

  for (let i = 1; i <= 3; i++) {
    function printI() {
      console.log(i);
    }
    flist.push(printI);
  }

  return flist;
}

const functions = makeFunctions();

for (const f of functions) {
  f();
}


my answer:
3
3
3

the function will reference the outer variable i's value at the time of the function call, which in this case will be 3 for all three calls

*/

