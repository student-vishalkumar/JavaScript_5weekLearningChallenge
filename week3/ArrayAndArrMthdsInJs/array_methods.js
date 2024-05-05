// Array Methods
/**
 * 1. Slice -> given an array and you want continous segment of array then
 *             you can use slice
 * arr = [10, 20, 30, 40, 50, 60, 70];
 * index: 0   1   2   3   4   5   6
 *       -7  -6  -5  -4  -3  -2  -1
 */

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr.slice(1, 4));  // segment from index [1, 4) //called as subarray

console.log(arr.slice(-4, -2)); // [-4 ,-2)

console.log(arr.slice(-1, 4)); // []

console.log(arr.slice(-2, -4)); // []

console.log(arr.slice(3)); // segment from index 3 to last