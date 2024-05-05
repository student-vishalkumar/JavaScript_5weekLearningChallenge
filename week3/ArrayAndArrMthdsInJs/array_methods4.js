let arr = [1,2,3,4,5];

for(let i=0; i < arr.length; i++) {
    console.log("Element at index ", i, "is", arr[i]);
}

console.log(arr);

/**
 * foreach goes to every element of the array, and executes the given callback on that elements doesn't return anything
 */
arr.forEach((element, idx) => {
    // one by one every element is passed as arguments to this callbak
    console.log("element at index ", idx, "is", element);
})

/**
 * 
 * Implement your own dummy custom for ech
 * customforEach(arr, cb) {
 * // it applies the cb to every index and element of the array
 * 
 * donot use the internal forEach method
 */

console.log();

function customforEach(arr, cb) {
    for(let i=0; i<arr.length; i++){
        cb(arr[i], i);
    }

}

customforEach([1,2,3], (element, idx) => {
    console.log("Element at index ", idx, "is" , element);
});


//useles
console.log(arr.indexOf(4));