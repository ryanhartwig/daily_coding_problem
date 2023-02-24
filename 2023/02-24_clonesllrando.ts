/* 

Good morning! Here's your coding interview problem for today.

This question was asked by Snapchat.

Given the head to a singly linked list, where each node also has a “random” pointer that points to anywhere in the linked list, deep clone the list.

*/

interface node<t> {
  value: t,
  next: node<t> | null,
  random: node<t> | null,
}

(() => {
  const deepClone = <t,>(head: node<t>) => {
    const clone: node<t>[] = [];
    const randoms: [number, t][] = [];

    const traverse = (n: node<t> = head, i: number = 0) => {
      const current: node<t> = { value: n.value, next: null, random: null }
      
      clone[i] = current;
      
      if (i) {
        clone[i-1].next = current;
      }
      if (n.random) {
        randoms.push([i, n.random.value])
      }

      if (n.next) {
        traverse(n.next, i + 1);
      }
    }

    traverse();

    console.log(randoms);

    randoms.forEach(([indexA, value]) => {
      const indexB = clone.findIndex(n => n.value === value);
      clone[indexA].random = clone[indexB];
    })
    
    return clone;
  }



  const c: node<string> = {
    value: 'c',
    next: null,
    random: null,
  }
  const b: node<string> = {
    value: 'b',
    next: c,
    random: null,
  }

  const a: node<string> = {
    value: 'a',
    next: b,
    random: null,
  }

  const head: node<string> = {
    value: 'head',
    next: a,
    random: null,
  }

  head.random = c;
  a.random = head;
  b.random = a;
  c.random = head;
  
  console.log(deepClone<string>(head))


  
})()