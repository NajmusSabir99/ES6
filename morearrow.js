//look at this->
const difference = (x,y) => x-y;
const multiply = (x,y,z) => x*y+z;

//now look at this->
const getAge = (person) => person.age;
const student = {name: 'Sabir', age: 45};
const age = getAge(student);
console.log(age);

//Look at this->
const getThird = numbers => numbers[2];
const third = getThird([5,6,7,8]);
console.log(third);

//now a large arrow function

const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}