const first = 'Najmus';
const last = 'Sabir';
const name = first+ ' ' +last;
console.log(name);
//this is the normal way of string

//now look at this:
const a = 10;
const b = 10;const result = 'The Sum of ' + a + ' and ' +b + ' is ' + (a+b);
console.log(result);
//now this writing pattern is not useful, because it has a lot of complexity

//now look at this:

const math = `The sum of ${a} and ${b} is ${a+b}`
console.log(math)
//this is way better right?


