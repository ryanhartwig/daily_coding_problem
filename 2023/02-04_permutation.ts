(() => {

  const checkInclusion = (s1: string, s2: string): boolean => {
    if (s1.length > s2.length) return false;
    
    const freq = new Map<string, number>();

    for (const char of s1.split('')) {
      freq.set(char, (freq.get(char) ?? 0) + 1);
    }

    return s2.split('').some((c, i, arr) => {
      if (i > arr.length - s1.length) return false;
      
      const existing = freq.get(c);
      if (existing) {
        const clone = new Map(freq);
        return arr.slice(i, i + s1.length).every(c => {
          let current = clone.get(c);

          if (!current) return false;

          clone.set(c, current - 1);
          return true;
        });
      }

      return false;
    });
  }

  const checkInclusionGPT = (s1: string, s2: string): boolean => {
    if (s1.length > s2.length) return false;
  
    const s1freq = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
      s1freq[s1.charCodeAt(i) - 97]++;
    }
  
    const s2freq = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
      s2freq[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i <= s2.length - s1.length; i++) {
      if (s1freq.every((f, j) => f === s2freq[j])) return true;
      s2freq[s2.charCodeAt(i) - 97]--;
      s2freq[s2.charCodeAt(i + s1.length) - 97]++;
    }
  
    return false;
  };

  console.log(checkInclusionGPT('ab', 'eidbaooo'));
  console.log(checkInclusionGPT('adc', 'dcda'));
  console.log(checkInclusionGPT('adcf', 'edcdaf'));
  console.log(checkInclusionGPT('adcf', 'edcdaf'));
  console.log(checkInclusionGPT('hello', 'ooolleoooleh'));

})()