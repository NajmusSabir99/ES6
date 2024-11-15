// var: no reason to use var in 2024 anymore
// let: allows reassigning the value
// const: do not allow reasign a new value

const money = 25;
//money = 50 -> Can not do it, beacause constant can never be changed
const rich = money + 50;
console.log(rich);

//now,
let count = 0;
count = count + 10;
console.log(count);
//in this way variable's value can be changed

const numbers = [23,23,24,25,25];
// numbers = [4,3,2,1,4]-> can not change the whole array
console.log(numbers);

//but this is allowed
numbers[1] = 55;
//or
numbers.push(8,9,65);
//inside elements can be changed
const student = {
    name: 'Najmus Sabir',
    class: 12
}
//this is now allowed
student = {name:'Najmus Sakib'}

//loop
for(let i=0;i<=10;i++){

}
//this is not allowed
for(const i=0;i<=10;i++){

}


