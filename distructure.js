//normal ways of object
const actor = {
    name : 'Cillian Murphy',
    age: 34,
    phone: '01768438878',
    money: 12000879
}
//console.log(actor.phone);

//now object distructering
// if right side is an object left side of distructering will be object as well;

const {phone,age: boyos} = actor;
console.log(phone);
console.log(boyos);

const numbers = [45,89];
const [first, second] = numbers;
const [x,y] = [12,66];

function doubleThem(a,b){
    return [a*2, b*2]
}
console.log((doubleThem(2,3)));