//finding the max
const max = Math.max(6,23,45,1,89);
console.log(max);

//will we get the same result?
const numbers = [3,4,5,6,7,8,9];
const arrayMax = Math.max(numbers);
console.log(arrayMax);

//no, to have the correct answer we have to add spread operator which ...
const numberS = [3,4,5,6,7,8,9];
const arrayMaX = Math.max(...numbers);
console.log(arrayMax);


//user spread operator to copy
const nums = [4,5,6,7,8,9];
const nums2 = nums;
nums2.push(12);
console.log(nums2);
//here if we console nums, 12 will be there too. Because Array and Object keep the reference. A non primitive contains same space in the memory;
//now if we use spread operator, this thing doesn't happen
//const nums = [4,5,6,7,8,9];
//const nums2 = [...nums];
//nums2.push(12);
//console.log(nums2);
