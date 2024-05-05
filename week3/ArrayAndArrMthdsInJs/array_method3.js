/**
 * 
 * splice -> method -> remove elements an dmemory space from array
 */

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const result = arr.splice(3, 5); // from index 1 remove 3 element in right

console.log("returned value", result);
console.log(arr);

// if we donot pass delete count
const result1 = arr.splice(1);
console.log("returned value", result1);
console.log(arr);


let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const res = array.splice(3, 4, -1, -3);// any no. of elements we can add in place of remove elements places
console.log("returned value", res);
console.log(array);
