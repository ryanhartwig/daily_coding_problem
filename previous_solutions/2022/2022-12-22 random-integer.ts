/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).

*/



const randint = () => {
  const rand7 = () => Math.ceil(Math.random() * 7);
  const rand5 = () => {
    const res = () => {
      let n = Math.round((5/7) * rand7());
      if ((n === 1 || n === 4) && !!Math.round(Math.random())) {
        n = res();
      };

      return Math.round(n);
    }

    return res();
  };


  const result: number[] = Array(5).fill(0);

  for (let i = 0; i < 500; i++) {
    const n = rand5();
    const current = result[n - 1];
    result[n - 1] = current + 1;
  }

  console.log(result.map(n => (n / 500).toFixed(2)));
}

randint();

