/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

*/

(() => {

  interface Entry {
    timestamp: number,
    count: number,
    type: "enter" | "exit",
  }

  const busiest = (entries: Entry[]) => {
    const sorted = entries.sort((a, b) => a.timestamp - b.timestamp);
    let maxPeople = 0;
    let currentPeople = 0;
    let [start, end]: [number, number] = [0, 0];

    for (let i = 0; i < sorted.length; i++) {
      currentPeople += (sorted[i].count * (sorted[i].type === 'enter' ? 1 : -1));
      if (currentPeople > maxPeople) {
        maxPeople = currentPeople;
        start = sorted[i].timestamp;
        end = sorted[i+1].timestamp;
      }
    } 

    return [start, end];
  }

  const entries: Entry[] = [
    {
      timestamp: 1526579928,
      count: 3,
      type: "enter"
    },
    {
      timestamp: 1526580382,
      count: 2,
      type: "exit"
    },
    {
      timestamp: 1526590382,
      count: 1,
      type: "enter"
    },
    {
      timestamp: 1526591382,
      count: 1,
      type: "enter"
    },
    {
      timestamp: 1526592382,
      count: 2,
      type: "enter"
    },
    {
      timestamp: 1526593382,
      count: 1,
      type: "exit"
    },
    {
      timestamp: 1526594382,
      count: 4,
      type: "exit"
    }
  ];

  console.log(busiest(entries));
  
})()