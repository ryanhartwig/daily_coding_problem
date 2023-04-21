/* 

Memoize api calls to deduplicate reqests that contain the same arguments.

*/


const sampleAPICall = (a: any) => {
  return new Promise((res) => {
      setTimeout(() => res(a), 2000)
})}

const memoize = (func: (...args: any) => any) => {
  const cache = new Map();

  return async (...args: any) => {
    const argsKey = JSON.stringify(args);
    let result = cache.get(argsKey);

    if (result) {
      console.log('result existed in cache and is being used');
    }
    if (result === undefined) {
      result = func(args);
      cache.set(argsKey, result);
    }

    return result;
  }
}

const memoContext = memoize(async (arg) => {
  const result = await sampleAPICall(arg);
  return result;
});

memoContext('yay!').then((res) => {
  console.log(res);
  memoContext('yay!').then((res) => console.log(res));
});
