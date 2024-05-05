// How can be create array in js ?

let x = []; //pairs of square arrays
// this above code initialised an empty array
console.log(x);

let arr = [10, "vishal", null, undefined, false, 33.333, 62];
//the above code initialised array with default values
console.log(arr);

let array = Array(15); //inbuilt method

console.log(array);


// length of an array
console.log(array.length);

let arraywithAll0 = Array(20).fill(0);
console.log(arraywithAll0);

let arrayWith0inRange = Array(20).fill(-1, 4, 9);// fill -1 from 5 to 9
console.log(arrayWith0inRange);