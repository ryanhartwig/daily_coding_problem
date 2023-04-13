/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Two Sigma.

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.



*/

(() => {

  /* 
  Answer: 
  
  It doesn't matter which game Alice plays. Each game requires two specific rolls to be made, each of which have a 1/6 chance. Therefore the probability of each game is equal to the result of 1/6 * 1/6, or 1/36.

  */

  const first = () => {
    let wins = 0;
    let losses = 0;
    
    for(let i = 0; i < 100000; i++) {
      const [roll1, roll2] = [
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
      ];

      roll1 === 5 && roll2 === 6 
        ? wins++
        : losses++
      ;
    }

    return `1:${(1 / (wins/(wins + losses))).toFixed(2)}`;    
  }

  const second = () => {
    let wins = 0;
    let losses = 0;
    
    for(let i = 0; i < 100000; i++) {
      const [roll1, roll2] = [
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6),
      ];

      roll1 === 5 && roll2 === 5 
        ? wins++
        : losses++
      ;
    }

    return `1:${(1 / (wins/(wins + losses))).toFixed(2)}`;    
  }

  console.log('first: ' + first());
  console.log('second: ' + second())

  
})()