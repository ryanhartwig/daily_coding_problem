/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

*/ 


type Job = (...args: any) => any;

interface Queue {
  queue: Job[],
  blocked: boolean,
  waiting: [Job, NodeJS.Timeout][]
}

interface Scheduler {
  interval: number,
  queue: Queue,
  intervalRef: NodeJS.Timer | null,
}

class Queue {
  constructor() {
    this.queue = [];
    this.blocked = false;
    this.waiting = [];
  }

  enqueue(ref: NodeJS.Timeout) {
    // find the timeout reference and the job to execute
    let execIndex = this.waiting.findIndex((el: [Job, NodeJS.Timeout]) => el[1] === ref);
    if (execIndex !== -1) {
      let [[job, timerRef]] = this.waiting.splice(execIndex, 1);
      this.queue.push(job);
    }
  }

  await(job: Job, time: number) {
    // Wait specified time, then add job to the call queue
    let ref = setTimeout(() => {
      this.enqueue(ref);
    }, time)
    
    this.waiting.push([job, ref]);
  }

  execute = async () => {

    if (!this.blocked) {
      let job = this.queue.length && this.queue.shift();
      if (job) {
        this.blocked = true;
        await job();
        this.blocked = false;
      }
      return;
    }
  }

  dumpAll() {
    this.queue = [];
    this.blocked = false;
    this.waiting = this.waiting.filter((el: [Job, NodeJS.Timeout]) => {
      clearTimeout(el[1]);
      return false;
    });
  }
}

class Scheduler {
  constructor(interval: number = 100) {
    this.interval = interval;
    this.queue = new Queue();
    this.intervalRef = null;
  }

  addJob(job: Job, time: number) {
    this.queue.await(job, time);
  }

  open() {
    this.intervalRef = setInterval(() => {
      this.queue.execute();
    }, this.interval)
  }

  close() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.queue.dumpAll();
    }
  }
}

const sched = new Scheduler();

sched.open();

sched.addJob(() => {
  console.log('should print last');
}, 5000);

sched.addJob(() => {
  console.log('should print first');
}, 500);

sched.addJob(() => {
  console.log('should print third');
}, 2000);

sched.addJob(() => {
  console.log('should print second');
}, 1000);

sched.addJob(() => {
  console.log('should print fourth');
}, 3000);


sched.addJob(() => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('should block following jobs');
      res('happy');
    }, 5000)
  })
}, 700);