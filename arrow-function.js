//Look at a normal function ->
function add(a, b){
    const result = a + b;
    return result;
}
const sum = add(5, 90);
console.log(sum);


//function expression
const add2 = function(a,b){
    return a+b;
}

//arrow function
const add3 = (a,b) => a+b;
//work same as before
const add4 = (a,b,c,d) => a+b*c/d;
const res = add4(4,2,2,1);
console.log(res);
