/**
 * reverse() -> this reverse an array
*/

let arr = [3, 2, 1, 4, 5];
console.log(arr);

arr.reverse(); // this is reverse array in place
console.log(arr);

/**
 * join -> it ombines elements of an array into a string
*/

let result = arr.join(); // default seperator between elements will be comma
console.log(result);

let result1 = arr.join(":");
console.log(result1);

/**
 * delete -> it is an operator
 */

let array = [32, 23, 4, 5, 1, 6, 0];

delete array[1]; //update the value with undefined

console.log(array);

console.log(array[1]);