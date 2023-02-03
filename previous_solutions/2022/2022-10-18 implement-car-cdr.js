/* 

Good morning! Here's your coding interview problem for today.

This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair


Implement car and cdr.

car(cons(3, 4)) returns 3
cdr(cons(3, 4)) returns 4

*/

// cons returns a function, that CALLS a function, with a and b (provided in the initial invocation of cons)
// aka returns a high order function, that invokes the callback with provided a & b params


// fn = (f) => f(a, b

// where are the values of a and b stored and accessible ? 
// when do 3 and 4 assign to a and b ? 


const cons = (a, b) => {
  return (f) => f(a, b);
}

const car = (fn) => fn((a) => a);
const cdr = (fn) => fn((a, b) => b);

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));


