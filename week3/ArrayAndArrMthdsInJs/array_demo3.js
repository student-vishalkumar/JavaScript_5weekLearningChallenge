// if  we have an array empty or having some values we can add more value to it

let arr = [3, 4, 1, 5, 6];
console.log(arr);


// Add element at start or end of an array


arr.unshift(-1); // it add -1 at the start of array
console.log(arr);

arr.push(10); // it add 10 at the last of array
console.log(arr);


// Remove element at the start and last of an array

arr.shift(); // remove an element at start from an array
console.log(arr);

arr.pop(); // remove an element at end from an array
console.log(arr);

arr.push(10, 20);// add multiple element at the end
console.log(arr);

console.log(arr[-1]);