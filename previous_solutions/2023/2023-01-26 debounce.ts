(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Facebook.

  Given a function f, and N return a debounced f of N milliseconds.

  That is, as long as the debounced f continues to be invoked, f itself will not be called for N milliseconds.
    
  */
  
  const f = () => console.log('hello');

  let tref: any;

  const clear = () => clearTimeout(tref);

  const debounce = (f: (...args:any) => any, N: number) => 
    () => {
      !!tref && clear();
      tref = setTimeout(() => f(), N);
  }

  const debounced = debounce(f, 1000);

  debounced();
  setTimeout(debounced, 900);
  setTimeout(debounced, 1800);
  setTimeout(debounced, 2700);
  setTimeout(debounced, 3600);
  setTimeout(debounced, 4500);
  setTimeout(debounced, 5400);
  setTimeout(debounced, 6300);
  setTimeout(debounced, 7200);
  setTimeout(debounced, 8100);
  setTimeout(debounced, 9000);
  setTimeout(debounced, 9900);

})()