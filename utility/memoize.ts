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

// const memoContext = memoize(async (arg) => {
//   const result = await sampleAPICall(arg);
//   return result;
// });