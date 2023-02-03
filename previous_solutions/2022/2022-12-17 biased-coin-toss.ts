




const toss_biased = () => {
  return Math.round(Math.random() * Math.random());
}



const unbiased = () => {
  const results: number[] = [];

  results.push(toss_biased());

  let result: number | undefined;
  if (results[0] === 0) {
    while (result !== 1) {
      result = toss_biased();
    }
  } else {
    while (result !== 0) {
      result = toss_biased();
    }
  }
  results.push(result);
  
  return results[Math.floor(Math.random() * results.length)];
}


const ones: number[] = [];
const zeroes: number[] = [];

for (let i = 0; i < 2000; i++) {
  const res = toss_biased();

  if (res === 0) zeroes.push(res);
  else ones.push(res);
}



console.log('biased ones ', ones.length, `${(ones.length / 2000).toFixed(2)}%`);
console.log('biased zeroes ', zeroes.length, `${(zeroes.length / 2000).toFixed(2)}%`);

const uOnes: number[] = [];
const uZeroes: number[] = [];

for (let i = 0; i < 1000; i++) {
  const res = unbiased();

  if (res === 0) uZeroes.push(res);
  else uOnes.push(res);
}

console.log('unbiased ones ', uOnes.length, `${(uOnes.length / 1000).toFixed(2)}%`);
console.log('unbiased zeroes ', uZeroes.length, `${(uZeroes.length / 1000).toFixed(2)}%`);