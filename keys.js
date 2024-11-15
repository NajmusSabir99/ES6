const glass = {
    name: 'glass',
    color: 'Golden',
    Price: 12,
    isCleaned : true
}
console.log(glass);
const keys = Object.keys(glass);
const values = Object.values(glass);
const entries = Object.entries(glass);
console.log(keys);
console.log(values);
console.log(entries);

delete glass.isCleaned;
console.log(glass);
