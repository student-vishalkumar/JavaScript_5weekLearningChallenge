//task.1
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num*2);
console.log(doubled); // [2,4,6]

// task.2

const items=[
    {name: 'Apple', type: 'fruit'},
    {name: 'Monitor', type: 'electronic'},
    {name: 'Orange', type: 'fruit'}
]

const fruitnames = items.filter(items => items.type === 'fruit').map(items => items.name);
console.log(fruitnames);

// task.3

const number = [1,2,3,4,5];
let sumodd = 0;

number.forEach(num =>{
    if(num % 2 !== 0) {
        sumodd += num;
    }
});

console.log(sumodd);
