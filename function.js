function add(num1, num2){
    const result = num1+num2;
    console.log(num1,num2,result);
    return result;
}

const sum = add(5,6);
const sum2 = add(5);//another number will be undefined;
const sum3 = add();//Still undefined and the result is NAN->not a number;


//we can set dault value. If value is not provided, take a default value;
function add2(num1, num2=0){
    const result = num1+num2;
    console.log(num1,num2,result);
    return result;
}
//now If we call
const res = add2(5);
//now as default is declared, it will take the value, now is not undefined;

