(() => {

  /* 

  Good morning! Here's your coding interview problem for today.

  This problem was asked by Microsoft.

  Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

  For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.

  Your algorithm should run in O(n) complexity.
  
  https://leetcode.com/problems/longest-consecutive-sequence/solutions/127576/longest-consecutive-sequence/?orderBy=most_votes
  
  */

  // O(n + n) (equivalent to 0(n))
  const consecutive = (input: number[]) => {
    const indexed: number[] = [];
    let max = 0;
    let working = 1;
    
    input.forEach(n => indexed[n] = n);

    indexed.forEach((n, i, arr) => {
      if (arr[i + 1] !== undefined) working++;
      else {
        max = Math.max(working, max);
        working = 1;
      }
    });
    
    return max;
  }

  const input = [100, 4, 200, 1, 3, 2];
  
  console.log(consecutive(input));
  
})()